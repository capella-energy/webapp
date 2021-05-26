import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import firebase from "firebase"; 
import { Link, useHistory } from "react-router-dom";
import "firebase/auth";
import "./Survey.css"
import "../Login/login.css"
import progressIMG from "../../assets/img/progress.svg"

const db = firebase.firestore();

const UtilityData = () => {
  const [utility, setUtility] = useState("");
  const [utilityEmail, setUtilityEmail] = useState("");
  const [utilityPassword, setUtilityPassword] = useState("");

  const history = useHistory();
  const [loader, setLoader] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const id = firebase.auth().currentUser.uid;
    db.collection("Utility")
      .doc(id)
      .set({
        utility: utility,
        utilityEmail: utilityEmail,
        utilityPassword: utilityPassword, 
        uid: id
      })
      .then(() => {
        setLoader(false);
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setUtility("");
    setUtilityEmail("");
    setUtilityPassword("");  
  };

  return (
    <>
      <Card>
        <Card.Body>
          <img id="progressIMG"src={progressIMG} alt=""/>
          <h2 className="text-center mb-4">Connect Your Utility Data</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="utility">
              <Form.Control
                placeholder="Utility Provider"
                value={utility}
                onChange={(e) => setUtility(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="utilityEmail">
              <Form.Control
                type="email"
                placeholder="Utility Email"
                value={utilityEmail}
                onChange={(e) => setUtilityEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="utilityPassword">
              <Form.Control
                type="password"
                placeholder="Utility Password"
                value={utilityPassword}
                onChange={(e) => setUtilityPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button disabled={loader} className="w-100" type="submit">
              Next
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link className="links" to="/">
              Skip for now
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default UtilityData;