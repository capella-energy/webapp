import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import firebase from "firebase"; 
import { useHistory, Link } from "react-router-dom";
import "./ProjectForm.css"; 
import "firebase/auth";

const db = firebase.firestore();

const Info = () => { 


  const id = firebase.auth().currentUser.uid;

  const [addy, setAddy] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(""); 
  const [zip, setZip] = useState(""); 
  const [utility, setUtility] = useState("");

  const history = useHistory();
  const [loader, setLoader] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("Users")
      .doc(id)
      .set({
        addy: addy,
        city: city, 
        state: state, 
        zip: zip, 
        utility: utility
      })
      .then(() => {
        setLoader(false);
        history.push("/thank-you");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setAddy("");
    setCity(""); 
    setState(""); 
    setZip(""); 
    setUtility(""); 
  };

  return (
    <>
      <Card className="blm">
        <Card.Body>
          <h6  className="formInstruct">Provide us with some details and we'll get you signed up!</h6>
          <Form className="projectForm" onSubmit={handleSubmit}>
            <Form.Group id="address">
              <Form.Control
                className="littleForm"
                placeholder="Address"
                value={addy}
                onChange={(e) => setAddy(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group  id="city">
              <Form.Control
                className="littleForm"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group   id="state">
              <Form.Control
                className="littleForm"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group   id="zip">
              <Form.Control
                className="littleForm"
                type="number"
                placeholder="Zipcode"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group  id="zip">
              <Form.Control
                className="littleForm"
                type="number"
                placeholder="Utility Account Number"
                value={utility}
                onChange={(e) => setUtility(e.target.value)}
                required
              />
            </Form.Group>
            <Button 
                id="submitForm" to={`/success`}>Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Info;