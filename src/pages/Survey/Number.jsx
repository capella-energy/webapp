import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import "./Survey.css"
import firebase from "firebase"; 
import "../Login/login.css"
import progressIMG from "../../assets/img/progress1.svg"; 
import "./Number.css"; 
import { useHistory } from "react-router-dom";

const db = firebase.firestore();


const Number = () => {

  const id = firebase.auth().currentUser.uid;
 
  const [Number, setNumber] = useState("");


  const history = useHistory();
  const [loader, setLoader] = useState(false);  


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("Users")
      .doc(id)
      .update({
        Number: Number 

      })
      .then(() => {
        setLoader(false);
        history.push("/complete");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
 
    setNumber("");
   
  };

  
  return (
    <>
      <Card >
        <Card.Body>
          {/* <img data-aos="fade-right" data-aos-duration="500"  id="progressIMG"src={progressIMG} alt=""/> */}
          <h2 data-aos="fade-right" data-aos-duration="700" className="text-center mb-4">Contact Info</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group data-aos="fade-right" data-aos-duration="900" id="name">
              <Form.Control
                placeholder="Phone Number"
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </Form.Group>
     
            <Button data-aos="fade-right" data-aos-duration="2000"  className="w-100" type="submit">
            Next
            </Button>
            </Form>
          {/* <div data-aos="fade-right" data-aos-duration="2100"  className="w-100 text-center mt-3">
            <Link className="links" to="/">
              Skip for now
            </Link>
          </div> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default Number;