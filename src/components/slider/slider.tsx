import React from "react";
import "./slider.scss";

interface sliderProps {}

export const Slider: React.FC<sliderProps> = (props) => {
  return <input className="slider" type="range" min="1" max="100"></input>;
};

export default Slider;
