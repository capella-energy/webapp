import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import firebase from "firebase"; 
import { useHistory } from "react-router-dom";
import "firebase/auth";
import "./Survey.css"
import "../Login/login.css"
import progressIMG from "../../assets/img/progress.svg"

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
        uid: id
      })
      .then(() => {
        setLoader(false);
        history.push("/connect-utility");
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
      <Card >
        <Card.Body>
          <img data-aos="fade-up" data-aos-duration="500"  id="progressIMG"src={progressIMG} alt=""/>
          <h2 data-aos="fade-up" data-aos-duration="800"  className="text-center mb-4">Let's Get to Know You Better</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group data-aos="fade-up" data-aos-duration="700" id="name">
              <Form.Control
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
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
            <Button data-aos="fade-up" data-aos-duration="1800"  disabled={loader} className="w-100" type="submit">
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Properties;