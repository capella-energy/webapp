import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import "./Survey.css"
import firebase from "firebase"; 
import "../Login/login.css"
import progressIMG from "../../assets/img/progress1.svg"
import "./UtilityData.css"
import { useHistory } from "react-router-dom";

const db = firebase.firestore();


const UtilityData = () => {

  const [utilityEmail, setUtilityEmail] = useState("");
  const [utility, setUtility] = useState("");
  const [utilityUser, setUtilityUser] = useState("");
  const [utilityPassword, setUtilityPassword] = useState(""); 


  const history = useHistory();
  const [loader, setLoader] = useState(false);  


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const id = firebase.auth().currentUser.uid;
    db.collection("Users")
      .doc(id)
      .update({
        utilityEmail: utilityEmail,
        utility: utility,
        utilityUser: utilityUser, 
        utilityPassword: utilityPassword, 

      })
      .then(() => {
        setLoader(false);
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setUtilityEmail("");
    setUtility("");
    setUtilityUser(""); 
    setUtilityPassword(""); 
   
  };

  
  return (
    <>
      <Card>
        <Card.Body>
          <img id="progressIMG"src={progressIMG} alt=""/>
          <h2 className="text-center mb-4">Connect Your Utility Data</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Control
                placeholder="Customer Email"
                value={utilityEmail}
                onChange={(e) => setUtilityEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="address">
              <Form.Control
                placeholder="Customer Utility"
                value={utility}
                onChange={(e) => setUtility(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="city">
              <Form.Control
                placeholder="Utility User Name"
                value={utilityUser}
                onChange={(e) => setUtilityUser(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="state">
              <Form.Control
                placeholder="Utility User Password"
                value={utilityPassword}
                onChange={(e) => setUtilityPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group  >
              <Form.Check id="formCheck" required type="checkbox" label="I authorize Capella to collect my billing & usage history." />
            </Form.Group>

     
            <Button className="w-100" type="submit">
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