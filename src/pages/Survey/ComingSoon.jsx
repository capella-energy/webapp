import React from "react";
import { Card } from "react-bootstrap"; 
import firebase from "firebase"; 
import "firebase/auth";
import "./Survey.css"
import "../Login/login.css"

const db = firebase.firestore();

const ComingSoon = () => {
 

  return (
    <>
      <Card >
        <Card.Body>
         
          <h4 data-aos="fade-up" data-aos-duration="800"  className="text-center mb-4">Thank you so much for signing up! We are diligently developing myCapella and it will soon be available. Please check back in at a later time.</h4>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default ComingSoon;