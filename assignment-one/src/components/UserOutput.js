import React from "react";

const userOutput = props => {
  return (
    <div>
      <p>The exhibition will close on 7pm.</p>
      <p onClick={props.click}>Change visitors.</p>
    </div>
  );
};

export default userOutput;
