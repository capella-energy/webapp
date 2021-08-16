import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import "./Marketplace/MarketColumns.css"
import { Link } from "react-router-dom"; 
import * as FaIcons from "react-icons/fa";

export default function Shortcut() {


    return (
        <div id="shortcut">
            <CardColumns>
    <Link className="cardLink" to="/marketplace">
        <Card className="marketCard">
            <Card.Body className="marketCardBody">
                <Card.Title className="cardTitle">
                    Connect
                </Card.Title>
                <Card.Text>
                    Find a nearby solar project 
                </Card.Text> 
                <FaIcons.FaStore />
            </Card.Body>
        </Card>
    </Link>

    <Link className="cardLink" to="/learn">
        <Card className="marketCard">
            <Card.Body className="marketCardBody">
                <Card.Title className="cardTitle">
                    Learn
                </Card.Title>
                <Card.Text>
                See what Community Solar is all about
                </Card.Text> 
            <FaIcons.FaBookOpen />
        </Card.Body>
    </Card>
    </Link>

    <Link className="cardLink" to="/billing">
        <Card className="marketCard">
            <Card.Body className="marketCardBody">
                <Card.Title className="cardTitle">
                    Power
                </Card.Title>
                <Card.Text>
                Analyze your savings once connected 
                </Card.Text> 
            <FaIcons.FaLightbulb />
        </Card.Body>
    </Card>
    </Link>
    </CardColumns>
    </div>
    )
}