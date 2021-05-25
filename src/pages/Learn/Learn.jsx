import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"; 
import "./Learn.css";
import { LearnGalleryData } from './LearnGalleryData';
import SliderComponent from './Slider';

class Learn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="learnPage">
              <Navbar />
              <div className="webapp-content">
                <h1 className="section-titles">Start Learning</h1>
                <SliderComponent />

                <div className="container learn-container">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {LearnGalleryData.map((item, index) => {
                    return (
                      <div key={index} className={item.cName}>
                        <div className="card gallery-card">
                            <div className="image">{item.image}</div>
                            <div className="centered">{item.title}</div>
                      </div>
                       </div>);})}
                      
                      </div>
                    </div>

                  </div>
                </div>
         );
    }
}
 
export default Learn;