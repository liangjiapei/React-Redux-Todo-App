import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "react-redux-todo-app-3b8e0",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: "555720442883"
  };

  firebase.initializeApp(config);
} catch (e) {
  console.log("firebase: ", e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
