import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "따라하기도 매우 어렵다.."
      </span>
      <span>− 박찬형, 2020</span>
    </div>
  );
}

export default About;