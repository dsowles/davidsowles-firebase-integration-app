/******************************************************************************
Filename: App.js
Author: David A. Sowles
Created: 02/09/2026
Description:  Root component of the application, responsible for high-level 
              layout and provider initialization.
******************************************************************************/


/******************************************************************************
Imports
******************************************************************************/

//import React, {Component} from 'react';
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import Counter from './Counter';
import TaskForm from './TaskForm';
/*****************************************************************************/

/***************************************************************************
 * Globals
 **************************************************************************/
const taskList = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

const handleAlert = () => alert("Button clicked!");

/*********************************************************************** */

// Creates a functional component that setups up the overall layout of the
// React app. This is also where the React app's "root" element will be.
function App() {

  return (
    <div>
      <h2>Task 1: Greetings</h2>
      <Greeting username="Alice"/>
      <Greeting username="Bob"/>
      <br />

      <h2>Task 2: Counter Button</h2>
      <Counter />

      <h2>Task 3: Display List with Keys</h2>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <h2>Task 4: Pass Function as Prop</h2>
      <UserInfo handleClick={handleAlert} />
      <br />

      <h2>Task 5: Create a Controlled Form</h2>
      <TaskForm />

    </div>
  );
}

/*****************************************************************************/

export default App;
