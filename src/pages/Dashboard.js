import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "react-animated-slider";
import firebase from "firebase";
import "firebase/auth";

import "react-animated-slider/build/horizontal.css";
import "../assets/Dashboard.css";
import "./Learn/slider-animations.css";

import { SliderData } from "./Learn/LearnGalleryData";

export default function Dashboard() {
  return (
    <div className="dashPage">
      <Navbar />

      <div className="webapp-content">
        <h1 className="section-titles">Welcome </h1>

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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
