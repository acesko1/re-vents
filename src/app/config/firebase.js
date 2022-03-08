import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDXe3fsj3-r5oCNHLbPcqyWzMYFokTiOQo",
  authDomain: "reventscourse-74977.firebaseapp.com",
  projectId: "reventscourse-74977",
  storageBucket: "reventscourse-74977.appspot.com",
  messagingSenderId: "905891617659",
  appId: "1:905891617659:web:4d9ca94ed61e49612a7bde"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;