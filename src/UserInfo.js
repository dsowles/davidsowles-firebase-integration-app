/******************************************************************************
Filename: UserInfo.js
Author: David A. Sowles
Created: 02/09/2026
Description:    Defines a Class component to be used as a child for the main
                app component.
******************************************************************************/

/******************************************************************************
Imports
******************************************************************************/
import React, {Component} from 'react';
/*****************************************************************************/

// Task 2: create a class component.
// Class components must inherit from the Component Parent class
class UserInfo extends Component {
  // The constructor of the class component will expect an object
  // which encapsulates the JSX properties which were passed to
  // the component (assuming some were passed).
  constructor(props) {
    // Make sure to call the parent's constructor first.
    super(props);
    // In this case, the class component's information will simply
    // be defined as a class field.
    this.state = {
      name: "Gordan Freeman",
      profession: "Theoretical Physicist"
    };
  }

  // Class components must define a render function which returns
  // the required JSX for the component.
  render() {
    return (
      <div style={{fontSize:24}}>
        {/* Task: Use JSX to return name and profession */}
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <button onClick={this.props.handleClick}>Show Alert</button>
      </div>
    );
  }
}


export default UserInfo;