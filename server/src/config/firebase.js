const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("../secrets/festify-10478-firebase-adminsdk-e3r2c-50f3444119.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

module.exports = firebaseAdmin;
