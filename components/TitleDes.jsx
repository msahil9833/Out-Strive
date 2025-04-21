import React from "react";

const TitleDes = ({ text, blueText, description }) => (
  <div className="all-section-title-des">
    <h1 >
      {text}
      <span> {blueText}</span>
    </h1>
    <p >{description}</p>
  </div>
);

export default TitleDes;
