import React, { Component, useEffect } from 'react';
import firebase from 'firebase'; 
import "./ProjectDetails.css";

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
              })
        })
    }

    

    render() { 
      
   
        return (
          <>
            <div>
              <div className="projectDetailsSection">
                <div className="projectImg" >
                  <img className="detailedIMG"src={this.state.projectImageURL} alt="project"/>
                </div>
                <div className="projDetails"  >
                  <h3>{this.state.projectName}</h3>
                  <h3>{this.state.projectLocation}</h3>
                  <h3>{this.state.projectAvailability}</h3> 
                  <h3>{this.state.projectDescription}</h3>
                  <h5>{this.state.projectSavings}</h5>
                </div>
              </div>   
            </div>

            <div className="sampleBill"> 
              <div className="sampleBillRow">
                <div className="oldBill">
                  <h3>Hello</h3>
              </div>
              <div className="newBill"  >
                <h3>Hello</h3> 
              </div>
              </div>
            </div>
          </>     
          ); 
    }
}
 
export default ProjectDetails;