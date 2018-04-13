import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAKhfSxh48i255l2p5eCZoftiBZUk4JiZc",
    authDomain: "projectlist-2ad69.firebaseapp.com",
    databaseURL: "https://projectlist-2ad69.firebaseio.com",
    projectId: "projectlist-2ad69",
    storageBucket: "projectlist-2ad69.appspot.com",
    messagingSenderId: "496207810577"
  };

  firebase.initializeApp(config);

  const database = firebase.database()
  const storage = firebase.database()

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export { firebase, database, storage, googleAuthProvider }}
