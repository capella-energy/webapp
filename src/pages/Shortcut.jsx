import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import "./Shortcut.css"
import { Link } from "react-router-dom"; 
import * as FaIcons from "react-icons/fa";

export default function Shortcut() {


    return (
        <div id="shortcut">
            <CardColumns className="shortcutCardColumns">
                <Link className="ScardLink" to="/marketplace">
                    <Card id="card" className="SmarketCard">
                        <Card.Body className="SmarketCardBody">
                        <FaIcons.FaStore className="cardIcon"/>
                        <div>
                            <Card.Title className="ScardTitle">
                                      Connect
                            </Card.Title>
                            <Card.Text>
                                Find a nearby solar project 
                            </Card.Text> 
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Link>

                <Link className="ScardLink" to="/learn">
                    <Card id="card" className="SmarketCard">
                        <Card.Body className="SmarketCardBody">
                        <FaIcons.FaBookOpen className="cardIcon" />
                        <div>
                            <Card.Title className="ScardTitle">
                                  Learn
                            </Card.Title>
                            <Card.Text>
                            Discover community solar
                            </Card.Text> 
                            </div>
                    </Card.Body>
                </Card>
                </Link>

                <Link className="ScardLink" to="/billing">
                    <Card className="SmarketCard">
                        <Card.Body className="SmarketCardBody">
                        <FaIcons.FaLightbulb  className="cardIcon" />
                        <div id="cardIcon1">
                            <Card.Title className="ScardTitle" >
                            Power
                            </Card.Title>
                            <Card.Text>Analyze your savings 
                            </Card.Text> 
                        </div>
                    </Card.Body>
                </Card>
    </Link>
    </CardColumns>
    </div>
    )
}