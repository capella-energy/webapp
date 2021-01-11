import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAdGUPPj3uPsx9UghiCqk11wgKtJh4MKZI",
    authDomain: "capella-1ebb8.firebaseapp.com",
    databaseURL: "https://capella-1ebb8.firebaseio.com",
    projectId: "capella-1ebb8",
    storageBucket: "capella-1ebb8.appspot.com",
    messagingSenderId: "280869192644",
    appId: "1:280869192644:web:aa64076d741926fdb5da91",
    measurementId: "G-031W4R6940" 
})

export const auth = app.auth()
export default app
