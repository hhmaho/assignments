import React, { Component } from "react";
import "./App.css";

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "Laura"
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Olivia" />
        <UserOutput userName="Steve" />
      </div>
    );
  }
}

export default App;
