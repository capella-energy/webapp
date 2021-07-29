import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import firebase from "firebase"; 
import { useHistory } from "react-router-dom";
import "firebase/auth";

const db = firebase.firestore();

const Properties = () => {
  const [name, setName] = useState("");
  const [addy, setAddy] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(""); 
  const [zip, setZip] = useState(""); 

  const history = useHistory();
  const [loader, setLoader] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const id = firebase.auth().currentUser.uid;
    db.collection("Users")
      .doc(id)
      .set({
        name: name,
        addy: addy,
        city: city, 
        state: state, 
        zip: zip, 
      })
      .then(() => {
        setLoader(false);
        alert("Thank you");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setAddy("");
    setCity(""); 
    setState(""); 
    setZip(""); 
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Let's Get to Know You a Bit Better!</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Control
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="address">
              <Form.Control
                placeholder="Address"
                value={addy}
                onChange={(e) => setAddy(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="city">
              <Form.Control
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="state">
              <Form.Control
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="zip">
              <Form.Control
                placeholder="Zipcode"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </Form.Group>
            <Button disabled={loader} className="w-100" type="submit">
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

var docName = db.name; 
 
export {docName}; 
export default Properties;