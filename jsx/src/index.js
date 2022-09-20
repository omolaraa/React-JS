// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with the ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
 
// 4) Create a component
/* function App() {
    let message = 'Bye there'; 
    if(Math.random() > 0.5) {
        message = 'Hello there!';
    }
    //We don't always haveto declare a variable:
    // const date = new Date();
    // const time = newDate.toLocaleTimeStriing();  
    return <h1>{message} {new Date().toLocaleTimeString()}</h1>
}
*/
/*
function App() {
    const name = 'Tobi';
    // const isTrue = true;
  
    return (
      <div>
        My name is:
        <h1>{name} and I am 23 :)</h1>
        // <h3> {isTrue} </h3> // boolean variable will return an error
        // in the console.
      </div>
    );
  }*/

  function App() {
  // unlike HTML attributes, JSX property value are written in quotes and 
  // curly braces.
    // return <input type = 'number' min = {5} />;

    //They can also be declared before being used: 
   const inputType = 'number';
   const minValue = 5;
   // const config = {color : 'red' }
   const message = 'Enter age';
    return (
    <input type={inputType}
    // spellCheck // == {true}
    spellCheck = {false} // should be written with curly braces
     min={minValue}
     max = {10}
     list = {[1,2,3]}
     placeholder = 'hi there'
     style = {{color: 'red'}} // an object can be used as a prop but can't
     // be used to print out to the browser e.g
    //  <h1>{config}</h1> 
    // instead: <input abc={config} />
    alt = {message}
     />
    );
    // Notes:
    //  Arrays, objects, variables should also be wrapped in curly braces.
  }

// 5) Show the component on the screen
root.render(<App />);