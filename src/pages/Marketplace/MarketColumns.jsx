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
          <CardColumns>
              <Card className="marketCard">
                <Card.Img src={p.ImageURL} variant="top" />
                <Card.Footer>
                  <small className="text-muted">{p.Location}</small>
                </Card.Footer>
                <Card.Body className="marketCardBody">
                  <Card.Title>{p.Name}</Card.Title>
                  <Card.Text>
                      {p.Savings}
                  </Card.Text>
                  <Card.Text>
                      {p.Availability}
                  </Card.Text>
                  <Card.Text>
                      {p.Utility}
                  </Card.Text>
                </Card.Body>   
              </Card>
          </CardColumns>
      </div>))
  
    return(
      <div>
        {displayProjects}
      </div>
      );
    }
    
    
  }


  

export default MarketColumns;