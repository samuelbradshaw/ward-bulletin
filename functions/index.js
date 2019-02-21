const functions = require("firebase-functions");

// hello world demo
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});

/*
  Bulletin functions use the Firestore database
*/

// get bulletin
exports.getBulletin = functions.https.onRequest((req, res) => {
  let id = req.query.id;
  if (!id) {
    res.status(400).send("Missing unit id");
    return;
  }
  setupCORS(res);
  let db = getFirestore();
  var docRef = db.collection("bulletins").doc(id);
  return docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return res.json(doc.data());
      } else {
        return res.sendStatus(404);
      }
    })
    .catch(function(error) {
      return res.status(599).send(error);
    });
});

// set bulletin
exports.setBulletin = functions.https.onRequest((req, res) => {
  let id = req.query.id;
  if (!id) {
    res.status(400).send("Missing unit id");
    return;
  }
  let body = req.body;
  if (!body) {
    res.status(400).send("Missing body");
    return;
  }
  let db = getFirestore();
  var docRef = db.collection("bulletins").doc(id);
  setupCORS(res);

  return docRef
    .set(body)
    .then(function(doc) {
      return res.status(200).end();
    })
    .catch(function(error) {
      return res.status(599).send(error);
    });
});

/*
  Unit functions use the Firebase database
*/

// add ward
exports.addUnit = functions.https.onRequest((req, res) => {
  let { id, name, address, searchname } = req.query;
  if (!id || !name || !address || !searchname) {
    res.status(400).send("Missing parameter");
    return;
  }
  setupCORS(res);

  // geocode address
  console.log("Geocode:", address);
  geoCode(address, (loc, err) => {
    if (err) {
      return res.status(599).send(error);
    }
    if (!loc) {
      return res.status(404).send("Address not found");
    }

    let db = getFirebaseDB();

    // add GeoFire location
    let GeoFire = require("geofire");
    let geoFire = new GeoFire(db.ref("units"));
    geoFire
      .set(id, [loc.lat, loc.lng])
      .then(
        function() {
          // add unit to Firebase DB
          db.ref("units/" + id)
            .update({
              name,
              address,
              searchname
            })
            .then(function(doc) {
              return res.status(200).end();
            });
        },
        function(error) {
          return res.status(599).send(error);
        }
      )
      .catch(function(error) {
        return res.status(599).send(error);
      });
  });
});

// get firebase
function getFirebase() {
  if (!getFirebase.firebase) {
    getFirebase.firebase = require("firebase");
    var config = {
      apiKey: "AIzaSyCSnrK3X_4pzbaieU-Qm5QzuD2CGOn5o3k",
      authDomain: "ward-bulletin-9b31d.firebaseapp.com",
      databaseURL: "https://ward-bulletin-9b31d.firebaseio.com",
      projectId: "ward-bulletin-9b31d",
      storageBucket: "ward-bulletin-9b31d.appspot.com",
      messagingSenderId: "861011314549"
    };
    getFirebase.firebase.initializeApp(config);
  }
  return getFirebase.firebase;
}

// get firestore database
function getFirestore() {
  return getFirebase().firestore();
}

// get firebase database
function getFirebaseDB() {
  return getFirebase().database();
}

function setupCORS(res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
}

// get lat/lng of address
function geoCode(address, handler) {
  const gmap = require("@google/maps").createClient({
    key: "AIzaSyDi4O2q3EV5WsDkVwBJUVv3B7aKLOg2fNo"
  });

  gmap.geocode(
    {
      address
    },
    function(err, response) {
      let location;
      if (!err) {
        let results = response.json.results;
        if (results.length) {
          location = results[0].geometry.location;
        }
      }
      handler(location, err);
    }
  );
}
