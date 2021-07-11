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
        uid: id
      })
      .then(() => {
        setLoader(false);
        history.push("/contact");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
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