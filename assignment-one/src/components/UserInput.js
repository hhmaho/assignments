import React from "react";

const userInput = props => {
  return (
    <div>
      <p>
        {props.userName} orders {Math.floor(Math.random() * 5)} tickets.{" "}
      </p>
      {/* children refers to any element 
        between opening and closing tag of the component (ref. App.js)*/}
      <p>{props.children}</p>
    </div>
  );
};

export default userInput;
