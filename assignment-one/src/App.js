import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    persons: [{ name: "Olivia" }, { name: "Tim" }, { name: "Lisa" }]
  };
  render() {
    return (
      <div className="App">
        <button>Visitor</button>
        <UserInput userName={this.state.persons[0]}>
          Admission price: EUR 5.
        </UserInput>
        <UserOutput />
      </div>
    );
  }
}

export default App;
