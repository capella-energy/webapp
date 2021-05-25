import React, { Component } from 'react';
import { SliderData } from './LearnGalleryData';
import "./slider-animations.css";
import "react-animated-slider/build/horizontal.css";
import Slider from "react-animated-slider";


class SliderComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="learnPage">
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
                </div>
         );
    }
}
 
export default SliderComponent;