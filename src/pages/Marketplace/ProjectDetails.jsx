import React, { Component } from 'react';
import firebase from 'firebase'; 
import "./ProjectDetails.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import Info from "./ProjectForm"; 

const db = firebase.firestore();



class ProjectDetails extends Component {
  

    state = {
        projects: [],
        projectName: "",
        projectLocation: "", 
        projectImageURL: "",
        projectAvailability: "", 
        projectDescription: "", 
        projectSavings: "", 
        projectUtility: ""
      }
    
    componentDidMount = () => {
      window.scrollTo(0, 0)
      
        const selectedProj = this.props.match.params.id
        var docRef = db.collection("Projects").doc(selectedProj);

        docRef.get().then((doc) => {
             this.setState({
                projectName: doc.data().Name,
                projectLocation: doc.data().Location,
                projectImageURL: doc.data().PortraitIMG,
                projectAvailability: doc.data().Availability,
                projectDescription: doc.data().Description,
                projectSavings: doc.data().Savings, 
                projectUtility: doc.data().Utility
              })
        })
    }

    

    render() { 
      
   
        return (
          <div className="projectDetailsPage">
            <div>
            <Link to={`/marketplace`}><button className="theBackButton"><FaIcons.FaChevronLeft className="leftThingy"/>Back</button></Link>
              <div className="projectDetailsSection">
                <div className="projectImg" >
                  <img className="detailedIMG"src={this.state.projectImageURL} alt="project"/>
                </div>
                <div className="projDetails"  >
                  <h3 className="detailTitle">{this.state.projectName}</h3>
                  <ul>
                    <li><FaIcons.FaMapMarkerAlt className="detailSVG"/><h3 className="detailTxt"><strong>Location</strong> <br/> {this.state.projectLocation}</h3></li>
                    <li><FaIcons.FaBolt className="detailSVG"/> <h3 className="detailTxt"><strong>Utility</strong> <br/>{this.state.projectUtility}</h3> </li>
                    <li><FaIcons.FaChartPie className="detailSVG"/> <h3 className="detailTxt"><strong>Availability</strong> <br/>{this.state.projectAvailability}</h3> </li>
                    <li><FaIcons.FaFileInvoiceDollar className="detailSVG"/><h3 className="detailTxt"><strong>Savings</strong> <br/>{this.state.projectSavings}</h3></li>
                    <li><FaIcons.FaInfoCircle className="detailSVG"/><h3 className="detailTxt"><strong>More Info</strong> <br/> {this.state.projectDescription}</h3></li>
                  </ul>
                </div>
              </div>   
            </div>

          {/* Bill */}

          <h6 className="formTitle">How you save with Capella</h6>

            <div className="sampleBill"> 
              <div className="sampleBillRow">
                <div className="oldBill">
                  <h3>Old Bill</h3>
                  <h5>Total Charges: $100.00</h5>
                  <h5>Credits: -$0.00</h5>
                 <hr></hr>
                  <h5>Amount Due: $100.00</h5>
              </div>
              
              
              <div className="newBill"  >
                  <h3>New Bill</h3>
                  <h5>Total Charges: $100.00</h5>
                  <h5>Credits: -$100.00</h5>
                  <hr></hr>
                  <h5>Amount Due: $0.00</h5>
              </div>
              <div className="newBill"  >
                  <h3>Capella Bill</h3>
                  <h5>Generated: 1000 kWh</h5>
                  <h5>Credits: $100.00</h5>
                  <h5>Discount: -$10.00</h5>
                  <hr></hr>
                  <h5>Amount Due: $90.00</h5>
              </div>
              </div>
             
            </div>
            <h6 className="formTitle">Subscribe to Community Solar with <strong>{this.state.projectName}</strong></h6>
            <Info />
          </div>     
          ); 
    }
}
 
export default ProjectDetails;