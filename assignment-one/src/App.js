import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    persons: [{ name: "Steve" }, { name: "Tim" }, { name: "Lisa" }]
  };

  // define method for button Visitor, arrowfunction
  switchNameHandler = addClientNumber => {
    //
    console.log(addClientNumber);
    this.setState({
      persons: [
        { name: "addClientNumber" },
        { name: "Tim (clientnumber 0012)" },
        { name: "Lisa (clientnumber 0013)" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Julia" },
        { name: event.target.value },
        { name: "Max" }
      ]
    });
  };

  render() {
    const style = {
      color: "peru",
      border: "1px #4b93e6",
      padding: "8px"
    };
    return (
      <div className="App">
        <button
          style={style}
          onClick={this.switchNameHandler.bind(
            this,
            "Lucie (clientnumber 0010)"
          )}
        >
          Visitor
        </button>
        <p>Number of previous visitors = {Math.floor(Math.random() * 5)}.</p>
        <UserInput name={this.state.persons[0].name}>Family ticket.</UserInput>
        <UserInput
          name={this.state.persons[1].name}
          changed={this.nameChangedHandler}
        />
        <UserInput name={this.state.persons[2].name} />

        <UserOutput click={this.switchNameHandler} />
      </div>
    );
  }
}

export default App;
