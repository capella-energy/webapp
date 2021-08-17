import React from "react";
import Navbar from "../Navbar/Navbar";
import firebase from "firebase";
import "firebase/auth";
import MyChart from "./Chart";
import Shortcut from "./Shortcut";

export default function Dashboard() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var db = firebase.firestore();
      var docRef = db.collection("Users").doc(user.uid);
      docRef.get().then(function (doc) {
        if (doc && doc.exists) {
          const myData = doc.data();
          const userName = myData.firstName;
          document.getElementById("userNameField").innerHTML = userName;
        }
      });
    }
  });

  return (
    <div className="dashPage">
      <Navbar />
      <div className="webapp-content">
        <h1 className="section-titles">
          Welcome, <span id="userNameField"></span>
        </h1>
        <MyChart />
        <Shortcut />
      </div>
    </div>
  );
}
