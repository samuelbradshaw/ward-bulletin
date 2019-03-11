const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const cors = require("cors")({ origin: true });

// hello world demo
exports.helloWorld = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    res.send("Hello from Ward Bulletin!");
  });
});

/*
  Bulletin functions use the Firestore database
*/

// get bulletin
// exports.getBulletin = functions.https.onRequest((req, res) => {
//   return cors(req, res, () => {
//     let id = req.query.id;
//     if (!id) {
//       res.status(400).send("Missing unit id");
//       return;
//     }

//     let db = getFirestore();
//     var docRef = db.collection("bulletins").doc(id);
//     return docRef
//       .get()
//       .then(function(doc) {
//         if (doc.exists) {
//           let data = doc.data();
//           return res.json(data);
//         } else {
//           return res.sendStatus(404);
//         }
//       })
//       .catch(function(error) {
//         return res.status(599).send(error);
//       });
//   });
// });

// set bulletin
exports.setBulletin = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    let id = req.query.id;
    if (!id) {
      return res.status(400).send("Missing unit id");
    }
    if (id === "demoward") {
      return res.status(401).send("Permission denied"); // don't publish demo ward
    }
    let body = req.body;
    if (!body) {
      return res.status(400).send("Missing body");
    }
    if (typeof body === "string") {
      // body didn't get converted to JSON object
      body = JSON.parse(body);
    }

    const tokenId = req.get("Authorization").split("Bearer ")[1];
    return admin
      .auth()
      .verifyIdToken(tokenId)
      .then(claims => {
        if (claims && claims.unit === id) {
          // gzip it
          const zlib = require("zlib");
          zlib.gzip(JSON.stringify(body), function(error, buffer) {
            if (error) throw error;
            const bucket = admin.storage().bucket();
            const file = bucket.file(id + "/bulletin.json");
            file.save(
              buffer,
              {
                metadata: {
                  contentType: "application/json",
                  contentEncoding: "gzip"
                }
              },
              error => {
                if (error) {
                  return res.status(500).send("Unable to upload the image.");
                }
                file.makePublic();
                return res.status(200).end();
              }
            );
          });
        } else {
          return res.status(401).send("Permission denied");
        }
      })
      .then(function(doc) {
        return res.status(200).end();
      })
      .catch(function(error) {
        return res.status(599).send(error);
      });
  });
});

/*
  Unit functions use the Firebase database
*/

// add ward
exports.addUnit = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    let body = req.body;
    if (typeof body === "string") {
      // body didn't get converted to JSON object
      body = JSON.parse(body);
    }
    let { id, name, address, searchname, user } = body;
    // console.log("addUnit:", JSON.stringify(body));
    if (!id || !name || !address || !searchname || !user) {
      return res.status(400).send("Missing parameter");
    }

    // make sure it doesn't already exist
    const db = admin.database();
    db.ref("units/" + id)
      .once("value")
      .then(snapshot => {
        let data = snapshot.val();
        if (data) {
          // ward already exists
          return res.status(597).send(`Ward id '${id}' already exists.`);
        }

        // geocode address
        geoCode(address, (loc, err) => {
          if (err) {
            return res.status(599).send(error);
          }
          if (!loc) {
            return res.status(404).send("Address not found");
          }

          // add GeoFire location
          let GeoFire = require("geofire");
          let geoFire = new GeoFire(db.ref("units"));
          geoFire
            .set(id, [loc.lat, loc.lng])
            .then(function() {
              // add unit to Firebase DB
              return db.ref("units/" + id).update({
                name,
                address,
                searchname
              });
            })
            .then(function() {
              // add unit id to user claims
              return admin.auth().setCustomUserClaims(user, { unit: id });
            })
            .then(function(doc) {
              return res.status(200).end();
            })
            .catch(function(error) {
              return res.status(599).send(error);
            });
        });
      });
  });
});

// copy Green Ward to Demo Ward
exports.greenToDemo = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const url = `https://firebasestorage.googleapis.com/v0/b/ward-bulletin-9b31d.appspot.com/o/greenward%2Fbulletin.json?alt=media`;
    const fetch = require("node-fetch");
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        // rename to Sample Ward
        let text = JSON.stringify(data);
        text = text.replace(new RegExp("Green Ward", "g"), "Sample Ward");

        const zlib = require("zlib");
        zlib.gzip(text, function(error, buffer) {
          if (error) throw error;
          const bucket = admin.storage().bucket();
          const file = bucket.file("demoward/bulletin.json");
          return file.save(
            buffer,
            {
              metadata: {
                contentType: "application/json",
                contentEncoding: "gzip"
              }
            },
            error => {
              if (error) {
                return res.status(500).send("Unable to upload the image.");
              }
              file.makePublic();
              return res.status(200).end();
            }
          );
        });
      })
      .then(() => res.status(200).end())
      .catch(error => res.status(599).send(error));
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
