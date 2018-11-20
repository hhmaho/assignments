import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput userName="Olivia">Admission price: EUR 5.</UserInput>
        <UserOutput />
      </div>
    );
  }
}

export default App;
