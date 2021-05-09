import React from "react";
import * as projectData from "./solar-projects.json"; 
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import "../assets/MarketColumns.css"


const MarketColumns = () => (
    <CardColumns>
        {projectData.projects.map(project => (
          <Card className="marketCard">
            <Card.Img variant="top"  src={project.properties.IMAGE} />
            <Card.Footer>
              <small className="text-muted">{project.properties.LOCATION}</small>
            </Card.Footer>
            <Card.Body className="marketCardBody">
              <Card.Title>{project.properties.NAME}</Card.Title>
              <Card.Text>
                {project.properties.SAVINGS}
              </Card.Text>
              <Card.Text>
                {project.properties.SPOTSLEFT}
              </Card.Text>
              <Card.Text>
                {project.properties.UTILITY}
              </Card.Text>
            </Card.Body>
            
          </Card>
        ))}
      </CardColumns>

)

export default MarketColumns;