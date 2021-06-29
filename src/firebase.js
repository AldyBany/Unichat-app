import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCrkDt0glqNPlzSlyl91-tKHpaq3YYzMGU",
    authDomain: "unichat-23595.firebaseapp.com",
    projectId: "unichat-23595",
    storageBucket: "unichat-23595.appspot.com",
    messagingSenderId: "744470748662",
    appId: "1:744470748662:web:3c0e1db72acad539c7fbd7"
  }).auth()