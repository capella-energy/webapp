import React, { Component } from 'react';
import Navbar from "./Navbar"; 
import "../assets/Learn.css";
import { LearnGalleryData, SliderData } from './LearnGalleryData';
import "../assets/slider-animations.css";
import "react-animated-slider/build/horizontal.css";
import Slider from "react-animated-slider";


class Learn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="learnPage">
              <Navbar />

              <div className="webapp-content">

                <h1 className="section-titles">Start Learning</h1>

                <Slider className="slider-wrapper">
                  {SliderData.map((item, index) => (
                    <div
                      key={index}
                      className="slider-content"
                      style={{
                        background: `url('${item.image}') no-repeat center center`,
                      }}
                    >
                    <div className="inner">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <button>{item.button}</button>
                    </div>
                  </div>))}
                </Slider>
       
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