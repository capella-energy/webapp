import React, { Component } from 'react';
import firebase from 'firebase'; 



class ProjectDetails extends Component {
    handleSubmit = () => {

    }; 


    render() { 

        const selectedProj = this.props.match.params.id;
        const db = firebase.firestore().collection('Projects').doc(selectedProj);
    

       
        return (
            <div> 
                <h1>Hello</h1>
            </div>
          );
        
    }
}
 
export default ProjectDetails;