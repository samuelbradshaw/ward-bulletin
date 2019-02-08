const functions = require("firebase-functions");

// hello world demo
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});

// get bulletin
exports.getBulletin = functions.https.onRequest((req, res) => {
  let id = req.query.id;
  if (!id) {
    res.status(400).send("Missing unit id");
    return;
  }
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
  return docRef
    .set(body)
    .then(function(doc) {
      return res.status(200).end();
    })
    .catch(function(error) {
      return res.status(599).send(error);
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

// get firebase database
function getFirestore() {
  return getFirebase().firestore();
}
