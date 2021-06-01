import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import "./MarketColumns.css"

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
                      ID: doc.Key,
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
              <Card  className="marketCard">
                <Card.Img src={p.ImageURL} variant="top" />
                <Card.Footer>
                  <small className="text-muted">{p.Location}</small>
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
                  <button>Subscribe</button>
                  </div>
                </Card.Body>   
              </Card>
     
      </div>))
  
    return(
      <CardColumns>
        {displayProjects}
        </CardColumns>
      );
    }
    
    
  }


  

export default MarketColumns;