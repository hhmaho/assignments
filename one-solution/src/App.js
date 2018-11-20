import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';


class App extends Component {
  state={
    username: 'Laura'
  }

  usernameChangedHandler = (event) =>{
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
       {/* <ol>
         <li>2 components: UserInput + UserOutput</li>
         <li>UserInput: input element, UserOutput: 2 paragraphs</li>
         <li>Output multiple UserOutput components in the App component(any paragraph texts)</li>
         <li>Pass a username to UserOutput via props and display it there</li>
         <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
         <li>Add a method to manipulate the state (=> an event-handler method)</li>
         <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
         <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
         <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
         <li>Add styling to your components/ elements in the components - both with inline styles and stylesheets</li>
       </ol> */}
       <UserInput
        changed={this.usernameChangedHandler}
        currentName={this.state.username}/>
       <UserOutput userName={this.state.username}/>
       <UserOutput userName={this.state.username}/>
       <UserOutput userName="Steve"/>

      </div>
    );
  }
}

export default App;
