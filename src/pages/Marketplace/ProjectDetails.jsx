import React, { Component } from 'react';
import firebase from 'firebase'; 
import "./ProjectDetails.css";


const db = firebase.firestore();


class ProjectDetails extends Component {

    state = {
        projects: [],
        projectName: "",
        projectLocation: ""
      }
    
    componentDidMount = () => {
        const selectedProj = this.props.match.params.id
        var docRef = db.collection("Projects").doc(selectedProj);

        docRef.get().then((doc) => {
             this.setState({
                projectName: doc.data().Name,
                projectLocation: doc.data().Location
              })
        })
    }

    

    render() { 
   
        return (
            <div className="projDetailsPage"> 
                <h3>{this.state.projectName}</h3>
                <h3>{this.state.projectLocation}</h3>
            </div>
            
          );
        
    }
}
 
export default ProjectDetails;