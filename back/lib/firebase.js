const firebase = require('firebase/app');
const firebaseStorage = require('firebase/storage');

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSG_SND_ID,
    appId: process.env.FIREBASE_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseStorage.getStorage(firebaseApp);

module.exports = { storage };