import React from "react";
import "./userInput.css";

const userInput = props => {
  return (
    <div className="Person">
      <p>Welcome {props.name}.</p>
      {/* children refers to any element 
        between opening and closing tag of the component (ref. App.js)*/}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default userInput;
