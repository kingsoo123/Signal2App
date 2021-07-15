import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCdzwY3beEZIXZ885XiZY8lcKNwGZQ2g-w",
    authDomain: "signal-clone-2d748.firebaseapp.com",
    projectId: "signal-clone-2d748",
    storageBucket: "signal-clone-2d748.appspot.com",
    messagingSenderId: "678960553301",
    appId: "1:678960553301:web:5ca73e5a2ac798bc0a23dc"
  };

  let app;

  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig)
  }else{
      app = firebase.app()
  }

  const db = app.firestore()
  const auth = firebase.auth()

  export { db, auth}