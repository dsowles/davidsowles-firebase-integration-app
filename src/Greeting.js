/******************************************************************************
Filename: Greeting.js
Author: David A. Sowles
Created: 02/09/2026
Description:    Defines a Functional component to be used as a child for the
                main app component.
******************************************************************************/


// Task 1: Create a functional component.
function Greeting({ username }) {
  return (
    // The <> </> tags are used to create an "empty" parent.
    // React does not allow multiple elements to be returned from a
    // component, unless they are nested.

    // Also, the use of double curly-braces below are for the following
    // purposes: 1. The first pair indicates that JS is going to be
    // used within, 2. The second, inner pair are used to define a JS object.
    <>
      <p>Hello, {username}!</p>
    </>

  );
}

export default Greeting