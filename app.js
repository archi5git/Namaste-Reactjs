/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child', key: "child" }, [
    React.createElement('h1',{key: "h1-1"}, "I'm h1 Tag"),
    React.createElement('h2', {key: "h2-1"}, "HELLO WORLD FROM REACT"),
     React.createElement('h1', {key: "h1-2"} ,"WELCOME TO REACT"),
    React.createElement('h2', {key: "h2-2"}, "LETS BUILD SOMETHING AWESOME"),
  ]),
  React.createElement('div', { id: 'child2', key: "child2" }, [
    React.createElement('h1', {key: "h1-3"}, "I'm h1 Tag"),
    React.createElement('h2', {key: "h2-3"}, "I'm h2 Tag"),
  ]),
]);

// JSX

console.log(parent);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'head' },
//   'Hello World from React!'
// ); // It's the job of Core React to create an element i.e, heading in this case

// React Element is normal JavaScript Object{}

// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.

// root.render(heading);
root.render(parent);

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
