import React from "react";
import { Button, Card } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import "./Survey.css"
import "../Login/login.css"
import progressIMG from "../../assets/img/progress1.svg"
import "./UtilityData.css"


const UtilityData = () => {
  
  return (
    <>
      <Card>
        <Card.Body>
          <img id="progressIMG"src={progressIMG} alt=""/>
          <h2 className="text-center mb-4">Connect Your Utility Data</h2>
          <iframe src="https://utilityapi.com/authorize/cupokoffi_gmail" 
          title="log">

          </iframe>
            <Button className="w-100" type="submit">
              Next
            </Button>
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