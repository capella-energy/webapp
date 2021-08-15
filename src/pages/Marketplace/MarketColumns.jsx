import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import "./MarketColumns.css"
import { Link } from "react-router-dom"; 
import * as FaIcons from "react-icons/fa";


import firebase from "firebase"; 
const db = firebase.firestore();

class MarketColumns extends React.Component {

  constructor(props){
    super(props);
  
    this.state = {
      projects: []
    }
  }
  
  componentDidMount = () => {
      db.collection("Projects").get().then((snapshot) => (
          snapshot.forEach((doc) => (
              this.setState((prevState) => ({
                  projects: [...prevState.projects, {
                      ID: doc.data().Key,
                      projID: doc.data().projID,
                      Availability: doc.data().Availability,
                      Coordinates: doc.data().Coordinates,
                      ImageURL: doc.data().ImageURL,
                      Location: doc.data().Location,
                      Name: doc.data().Name,
                      Savings: doc.data().Savings,
                      Utility: doc.data().Utility
                  }]
              }))
          ))
      ))
      
  }
  
  render() {
    let displayProjects = this.state.projects.map((p) => (
      <div key={p.ID}>
        <Link className="cardLink" to={`/marketplace/${p.projID}`}>
              <Card  className="marketCard">
                <Card.Img src={p.ImageURL} variant="top" />
                <Card.Footer>
                  <small className="text-muted"><FaIcons.FaMapMarkerAlt/>  {p.Location}</small>
                </Card.Footer>
                <Card.Body className="marketCardBody">
                  <Card.Title className="cardTitle">{p.Name}</Card.Title>
                  <div className="cardDetails">
                  <Card.Text>
                    Savings: <span> </span>
                      {p.Savings}
                  </Card.Text>
                  <Card.Text>
                  Availability: <span> </span>
                      {p.Availability}
                  </Card.Text>
                  <Card.Text>
                  Utility: <span> </span>
                      {p.Utility}
                  </Card.Text>
                  
                  </div>
                </Card.Body>   
              </Card>
              </Link>
     
      </div>))
  
    return(
      <CardColumns>
        {displayProjects}
        </CardColumns>
      );
    }
    
    
  }


  

export default MarketColumns;