import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import firebase from "firebase"; 
import { useHistory } from "react-router-dom";
import "firebase/auth";

const db = firebase.firestore();

const Info = () => {
  const [name, setName] = useState("");
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
    const id = firebase.auth().currentUser.uid;
    db.collection("Users")
      .doc(id)
      .set({
        addy: addy,
        city: city, 
        state: state, 
        zip: zip, 
        uid: id, 
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

    setName("");
    setAddy("");
    setCity(""); 
    setState(""); 
    setZip(""); 
    setUtility(""); 
  };

  return (
    <>
      <Card >
        <Card.Body>
          <h2 data-aos="fade-up" data-aos-duration="800"  className="text-center mb-4">Let's Get to Know You Better</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group data-aos="fade-up" data-aos-duration="900" id="address">
              <Form.Control
                placeholder="Address"
                value={addy}
                onChange={(e) => setAddy(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-up" data-aos-duration="1200"  id="city">
              <Form.Control
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-up" data-aos-duration="1300"  id="state">
              <Form.Control
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-up" data-aos-duration="1500"  id="zip">
              <Form.Control
                type="number"
                placeholder="Zipcode"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-up" data-aos-duration="1500"  id="zip">
              <Form.Control
                type="number"
                placeholder="Utility Account Number"
                value={utility}
                onChange={(e) => setUtility(e.target.value)}
                required
              />
            </Form.Group>
            <Button data-aos="fade-up" data-aos-duration="1800"  disabled={loader} className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Info;