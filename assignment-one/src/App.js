import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    persons: [{ name: "Olivia" }, { name: "Tim" }, { name: "Lisa" }]
  };

  // method for button Visitor, arrowfunction
  switchNameHandler = () => {
    console.log("click test");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Visitor</button>
        <UserInput userName={this.state.persons[0].name}>
          Admission price: EUR 5.
        </UserInput>
        <UserOutput />
      </div>
    );
  }
}

export default App;
