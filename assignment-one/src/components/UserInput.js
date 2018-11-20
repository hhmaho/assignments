import React from "react";

const userInput = props => {
  return (
    <div>
      <p>
        {props.userName} orders {Math.floor(Math.random() * 5)} tickets.{" "}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default userInput;
