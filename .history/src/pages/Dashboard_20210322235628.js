import React, { useState } from "react";
import Navbar from "./Navbar";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../assets/Dashboard.css";
import "../assets/slider-animations.css";

import { SliderData } from "./LearnGalleryData";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="webapp-content">
        <h1 className="section-titles">Welcome, Hans</h1>
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
                <button href="./Marketplace.jsx">{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
