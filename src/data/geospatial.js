// Default geohash length
var g_GEOHASH_PRECISION = 10;

// Characters used in location geohashes
var g_BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";

// The meridional circumference of the earth in meters
var g_EARTH_MERI_CIRCUMFERENCE = 40007860;

// Length of a degree latitude at the equator
var g_METERS_PER_DEGREE_LATITUDE = 110574;

// Number of bits per geohash character
var g_BITS_PER_CHAR = 5;

// Maximum length of a geohash in bits
var g_MAXIMUM_BITS_PRECISION = 22 * g_BITS_PER_CHAR;

// Equatorial radius of the earth in meters
var g_EARTH_EQ_RADIUS = 6378137.0;

// The following value assumes a polar radius of
// var g_EARTH_POL_RADIUS = 6356752.3;
// The formulate to calculate g_E2 is
// g_E2 == (g_EARTH_EQ_RADIUS^2-g_EARTH_POL_RADIUS^2)/(g_EARTH_EQ_RADIUS^2)
// The exact value is used here to avoid rounding errors
var g_E2 = 0.00669447819799;

// Cutoff for rounding errors on double calculations
var g_EPSILON = 1e-12;

Math.log2 =
  Math.log2 ||
  function(x) {
    return Math.log(x) / Math.log(2);
  };

/**
 * Converts degrees to radians.
 *
 * @param { number } degrees The number of degrees to be converted to radians.
 * @return { number } The number of radians equal to the inputted number of degrees.
 */
var degreesToRadians = function(degrees) {
  if (typeof degrees !== "number" || isNaN(degrees)) {
    throw new Error("Error: degrees must be a number");
  }

  return (degrees * Math.PI) / 180;
};

/**
 * Calculates eight points on the bounding box and the center of a given circle. At least one
 * geohash of these nine coordinates, truncated to a precision of at most radius, are guaranteed
 * to be prefixes of any geohash that lies within the circle.
 *
 * @param {Array.<number>} center The center given as [latitude, longitude].
 * @param {number} radius The radius of the circle.
 * @return {Array.<Array.<number>>} The eight bounding box points.
 */
var boundingBoxCoordinates = function(center, radius) {
  var latDegrees = radius / g_METERS_PER_DEGREE_LATITUDE;
  var latitudeNorth = Math.min(90, center[0] + latDegrees);
  var latitudeSouth = Math.max(-90, center[0] - latDegrees);
  var longDegsNorth = metersToLongitudeDegrees(radius, latitudeNorth);
  var longDegsSouth = metersToLongitudeDegrees(radius, latitudeSouth);
  var longDegs = Math.max(longDegsNorth, longDegsSouth);
  return [
    [center[0], center[1]],
    [center[0], wrapLongitude(center[1] - longDegs)],
    [center[0], wrapLongitude(center[1] + longDegs)],
    [latitudeNorth, center[1]],
    [latitudeNorth, wrapLongitude(center[1] - longDegs)],
    [latitudeNorth, wrapLongitude(center[1] + longDegs)],
    [latitudeSouth, center[1]],
    [latitudeSouth, wrapLongitude(center[1] - longDegs)],
    [latitudeSouth, wrapLongitude(center[1] + longDegs)]
  ];
};

/**
 * Wraps the longitude to [-180,180].
 *
 * @param {number} longitude The longitude to wrap.
 * @return {number} longitude The resulting longitude.
 */
var wrapLongitude = function(longitude) {
  if (longitude <= 180 && longitude >= -180) {
    return longitude;
  }
  var adjusted = longitude + 180;
  if (adjusted > 0) {
    return (adjusted % 360) - 180;
  } else {
    return 180 - (-adjusted % 360);
  }
};

/**
 * Calculates the bounding box query for a geohash with x bits precision.
 *
 * @param {string} geohash The geohash whose bounding box query to generate.
 * @param {number} bits The number of bits of precision.
 * @return {Array.<string>} A [start, end] pair of geohashes.
 */
var geohashQuery = function(geohash, bits) {
  var precision = Math.ceil(bits / g_BITS_PER_CHAR);
  if (geohash.length < precision) {
    return [geohash, geohash + "~"];
  }
  geohash = geohash.substring(0, precision);
  var base = geohash.substring(0, geohash.length - 1);
  var lastValue = g_BASE32.indexOf(geohash.charAt(geohash.length - 1));
  var significantBits = bits - base.length * g_BITS_PER_CHAR;
  var unusedBits = g_BITS_PER_CHAR - significantBits;
  /*jshint bitwise: false*/
  // delete unused bits
  var startValue = (lastValue >> unusedBits) << unusedBits;
  var endValue = startValue + (1 << unusedBits);
  /*jshint bitwise: true*/
  if (endValue > 31) {
    return [base + g_BASE32[startValue], base + "~"];
  } else {
    return [base + g_BASE32[startValue], base + g_BASE32[endValue]];
  }
};

/**
 * Generates a geohash of the specified precision/string length from the  [latitude, longitude]
 * pair, specified as an array.
 *
 * @param {Array.<number>} location The [latitude, longitude] pair to encode into a geohash.
 * @param {number=} precision The length of the geohash to create. If no precision is
 * specified, the global default is used.
 * @return {string} The geohash of the inputted location.
 */
var encodeGeohash = function(location, precision) {
  // Use the global precision default if no precision is specified
  precision = precision || g_GEOHASH_PRECISION;

  var latitudeRange = {
    min: -90,
    max: 90
  };
  var longitudeRange = {
    min: -180,
    max: 180
  };
  var hash = "";
  var hashVal = 0;
  var bits = 0;
  var even = 1;

  while (hash.length < precision) {
    var val = even ? location[1] : location[0];
    var range = even ? longitudeRange : latitudeRange;
    var mid = (range.min + range.max) / 2;

    /* jshint -W016 */
    if (val > mid) {
      hashVal = (hashVal << 1) + 1;
      range.min = mid;
    } else {
      hashVal = (hashVal << 1) + 0;
      range.max = mid;
    }
    /* jshint +W016 */

    even = !even;
    if (bits < 4) {
      bits++;
    } else {
      bits = 0;
      hash += g_BASE32[hashVal];
      hashVal = 0;
    }
  }

  return hash;
};

/**
 * Calculates the number of degrees a given distance is at a given latitude.
 *
 * @param { number } distance The distance to convert.
 * @param { number } latitude The latitude at which to calculate.
 * @return { number } The number of degrees the distance corresponds to.
 */
var metersToLongitudeDegrees = function(distance, latitude) {
  var radians = degreesToRadians(latitude);
  var num = (Math.cos(radians) * g_EARTH_EQ_RADIUS * Math.PI) / 180;
  var denom = 1 / Math.sqrt(1 - g_E2 * Math.sin(radians) * Math.sin(radians));
  var deltaDeg = num * denom;
  if (deltaDeg < g_EPSILON) {
    return distance > 0 ? 360 : 0;
  } else {
    return Math.min(360, distance / deltaDeg);
  }
};

/**
 * Calculates the bits necessary to reach a given resolution, in meters, for the longitude at a
 * given latitude.
 *
 * @param { number } resolution The desired resolution.
 * @param { number } latitude The latitude used in the conversion.
 * @return { number } The bits necessary to reach a given resolution, in meters.
 */
var longitudeBitsForResolution = function(resolution, latitude) {
  var degs = metersToLongitudeDegrees(resolution, latitude);
  return Math.abs(degs) > 0.000001 ? Math.max(1, Math.log2(360 / degs)) : 1;
};

/**
 * Calculates the bits necessary to reach a given resolution, in meters, for the latitude.
 *
 * @param {number} resolution The bits necessary to reach a given resolution, in meters.
 */
var latitudeBitsForResolution = function(resolution) {
  return Math.min(
    Math.log2(g_EARTH_MERI_CIRCUMFERENCE / 2 / resolution),
    g_MAXIMUM_BITS_PRECISION
  );
};

/**
 * Calculates the maximum number of bits of a geohash to get a bounding box that is larger than a
 * given size at the given coordinate.
 *
 * @param {Array.<number>} coordinate The coordinate as a [latitude, longitude] pair.
 * @param {number} size The size of the bounding box.
 * @return {number} The number of bits necessary for the geohash.
 */
var boundingBoxBits = function(coordinate, size) {
  var latDeltaDegrees = size / g_METERS_PER_DEGREE_LATITUDE;
  var latitudeNorth = Math.min(90, coordinate[0] + latDeltaDegrees);
  var latitudeSouth = Math.max(-90, coordinate[0] - latDeltaDegrees);
  var bitsLat = Math.floor(latitudeBitsForResolution(size)) * 2;
  var bitsLongNorth =
    Math.floor(longitudeBitsForResolution(size, latitudeNorth)) * 2 - 1;
  var bitsLongSouth =
    Math.floor(longitudeBitsForResolution(size, latitudeSouth)) * 2 - 1;
  return Math.min(
    bitsLat,
    bitsLongNorth,
    bitsLongSouth,
    g_MAXIMUM_BITS_PRECISION
  );
};

/**
 * Calculates a set of queries to fully contain a given circle. A query is a [start, end] pair
 * where any geohash is guaranteed to be lexiographically larger then start and smaller than end.
 *
 * @param {Array.<number>} center The center given as [latitude, longitude] pair.
 * @param {number} radius The radius of the circle.
 * @return {Array.<Array.<string>>} An array of geohashes containing a [start, end] pair.
 */
var geohashQueries = function(center, radius) {
  var queryBits = Math.max(1, boundingBoxBits(center, radius));
  var geohashPrecision = Math.ceil(queryBits / g_BITS_PER_CHAR);
  var coordinates = boundingBoxCoordinates(center, radius);
  var queries = coordinates.map(function(coordinate) {
    return geohashQuery(encodeGeohash(coordinate, geohashPrecision), queryBits);
  });
  // remove duplicates
  return queries.filter(function(query, index) {
    return !queries.some(function(other, otherIndex) {
      return (
        index > otherIndex && query[0] === other[0] && query[1] === other[1]
      );
    });
  });
};

let distance = (location1, location2) => {
  var radius = 6371; // Earth's radius in kilometers
  var latDelta = degreesToRadians(location2[0] - location1[0]);
  var lonDelta = degreesToRadians(location2[1] - location1[1]);

  var a =
    Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
    Math.cos(degreesToRadians(location1[0])) *
      Math.cos(degreesToRadians(location2[0])) *
      Math.sin(lonDelta / 2) *
      Math.sin(lonDelta / 2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radius * c;
};

function getFirebaseURL() {
  return "https://ward-bulletin-9b31d.firebaseio.com";
}

// get wards at specified locatoin and radius
let getWardsAtLocation = (location, radius = 3) => {
  // Get the list of geohashes to query
  var geohashesToQuery = geohashQueries(location, radius * 1000);

  // Filter out duplicate geohashes
  geohashesToQuery = geohashesToQuery.filter(function(geohash, i) {
    return geohashesToQuery.indexOf(geohash) === i;
  });

  let promises = [];
  let wards = {};

  for (let geohashQuery of geohashesToQuery) {
    let url = `${getFirebaseURL()}/units.json?orderBy="g"&startAt="${
      geohashQuery[0]
    }"&endAt="${geohashQuery[1]}"&limitToFirst=20`;
    let promise = fetch(url).then(response => {
      // console.log("Response", response.json());
      return response.json().then(data => {
        Object.assign(wards, data);
      });
    });
    promises.push(promise);
  }

  return Promise.all(promises).then(values => {
    console.log(wards);
    return wards;
  });
};

exports.getWardsAtLocation = getWardsAtLocation;
exports.distance = distance;
