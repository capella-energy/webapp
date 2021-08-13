import React from "react";
import { Card } from "react-bootstrap"; 
import firebase from "firebase"; 
import "firebase/auth";
import "./Survey.css"
import "../Login/login.css"
import * as FaIcons from "react-icons/fa";


const db = firebase.firestore();

const ComingSoon = () => {
 

  return (
    <>
      <Card >
        <Card.Body>
        
          <h4 data-aos="fade-in" data-aos-duration="800"  className="text-center mb-4">Thank you so much for signing up! <br></br>my<strong>Capella</strong> will soon be available.  <br></br> Please check back in at a later time. <br></br><br></br><FaIcons.FaBolt /></h4>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default ComingSoon;