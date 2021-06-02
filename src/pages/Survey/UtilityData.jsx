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
        history.push("/complete");
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
      <Card >
        <Card.Body>
          <img data-aos="fade-right" data-aos-duration="500"  id="progressIMG"src={progressIMG} alt=""/>
          <h2 data-aos="fade-right" data-aos-duration="700" className="text-center mb-4">Connect Your Utility Data</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group data-aos="fade-right" data-aos-duration="900" id="name">
              <Form.Control
                placeholder="Customer Email"
                value={utilityEmail}
                onChange={(e) => setUtilityEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-right" data-aos-duration="1200" id="address">
              <Form.Control
                placeholder="Customer Utility"
                value={utility}
                onChange={(e) => setUtility(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-right" data-aos-duration="1500" id="city">
              <Form.Control
                placeholder="Utility User Name"
                value={utilityUser}
                onChange={(e) => setUtilityUser(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-right" data-aos-duration="1700"  id="state">
              <Form.Control
                placeholder="Utility User Password"
                value={utilityPassword}
                onChange={(e) => setUtilityPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group data-aos="fade-right" data-aos-duration="1900"  >
              <Form.Check id="formCheck" required type="checkbox" label="I authorize Capella to collect my billing & usage history." />
            </Form.Group>

     
            <Button data-aos="fade-right" data-aos-duration="2000"  className="w-100" type="submit">
            Next
            </Button>
            </Form>
          <div data-aos="fade-right" data-aos-duration="2100"  className="w-100 text-center mt-3">
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