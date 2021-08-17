import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link} from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";

export default function Completion() {

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
    <>
      <Card>
        <Card.Body>
          <h2
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-center mb-4"
          >
            Congratulations,  <span id="userNameField"></span>
          </h2>
          <h6  data-aos="fade-up"
            data-aos-duration="700"
            className="text-center mb-4"
            >You have completed the initial enrollment process.<br></br> Welcome to the Capella family!
             </h6>

          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="w-100 text-center mt-3"
          >
            <Link className="links" to="/">
            <Button
              data-aos="fade-up"
              data-aos-duration="1200"

              className="w-100"
 
            >
              Go to Dashboard
            </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
     
    </>
  );
}
