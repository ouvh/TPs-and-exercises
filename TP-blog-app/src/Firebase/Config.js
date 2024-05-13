import firebase from 'firebase/app' // the core part of firebase package
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCbEQ0X3_Gn9TkKxpqG95qDdCRQ4okpSDg",
    authDomain: "um6p-course-80ca4.firebaseapp.com",
    projectId: "um6p-course-80ca4",
    storageBucket: "um6p-course-80ca4.appspot.com",
    messagingSenderId: "1010908540209",
    appId: "1:1010908540209:web:8447f428912b07de071410"
  };


// Step 1 : init firebase
// we use the firebaseConfig to init the connection to our firebase backend
firebase.initializeApp(firebaseConfig)
// Step 2 : Init the firestore service
// If we want to do any communication with the firestore db (eg. add documents)
// we can use projectFirestore variable
const projectFirestore = firebase.firestore()
//Step 3 : Export projectFirestore
// This will enable the use the firebase in different components
export {projectFirestore}