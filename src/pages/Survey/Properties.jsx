import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import firebase from "firebase"; 

const Properties = () => {
  const [name, setName] = useState("");
  const [addy, setAddy] = useState("");
  const [city, setCity] = useState("");

  const [loader, setLoader] = useState(false); 

  const db = firebase.firestore(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Users")
      .add({
        name: name,
        addy: addy,
        city: city,
      })
      .then(() => {
        setLoader(false);
        alert("Thank you");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setAddy("");
    setCity("");
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Let's Get to Know You a Bit Better</h2>
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
            <Button disabled={loader} className="w-100" type="submit">
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Properties;