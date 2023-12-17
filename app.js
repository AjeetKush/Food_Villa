 // How to create h1 tag and that "hello world" using react inside that div route.

        // const heading = React.createElement("h1", {}, "Hello World from React!"); // this is how we create h1 TAG inside react.

        // //console.log(heading); At the end of the day it {heading} is an normal javascript object.
         

        // const root = ReactDOM.createRoot(document.getElementById("root")); // this root is the place where whole react code will run inside react. Everything that we will render we will render on that root.

        // root.render(heading); // this render function is responsible to take this heading object and convert it to h1 tag and put it onto the DOM.





/**
 *  let suppose you want to create a complex html structure using react
 * 
 * <div id="parent">
 *     <div id="child">
 *          <h1>I'm H1 Tag</h1>
 *     </div>
 * </div>
 * 
 * 
 * 
 * 
 */

// this is how we create nested HTML structure inside our react application.



// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I'm H1 Tag") ) );

// // console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



/**
 *  React.createElement gives us an reactObject and when we render that object to the DOM then that object is converted to normal HTML tag by the react and react put it on the DOM.
 * 
 * 
 */



/**
 *  let suppose you want to create a complex html structure using react
 * 
 * <div id="parent">
 *     <div id="child">
 *          <h1>I'm H1 Tag</h1>
 *          <h2>I'm H2 Tag</h2>
 *     </div>
 * </div>
 * 
 * Now we want to create sibling of div tag with id="child" which is h1 and h2.
 * 
 * 
 * 
 * 
 */


// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [ React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag") ]) );

// //if you want to create siblings, you need to pass them as an array => as array of children's [ ]. 

// // console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/**
 *  let suppose you want to create a complex html structure using react
 * 
 * <div id="parent">
 *     <div id="child">
 *          <h1>I'm H1 Tag</h1>
 *          <h2>I'm H2 Tag</h2>
 *     </div>
 * 
 *    <div id="child2">
 *          <h1>I'm H1 Tag</h1>
 *          <h2>I'm H2 Tag</h2>
 *     </div>
 * 
 * </div>
 * 
 * Now we want to create this above structure.
 * 
 * 
 * 
 * 
 */




const parent = React.createElement("div", {id: "parent"}, [
    
React.createElement("div", {id: "child"}, [ React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag") ]), 

React.createElement("div", {id: "child2"}, [ React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag") ])

] );

// this code is messy and hard to read that is why there is something called JSX. JSX will make our life easy when we have to make tags in react. This is the last time we are using this React.createElement(), in next class we will learn about JSX;

// JSX uses React.createElement() in the backend, JSX is kindof syntaxical sugar over React.createElement() to make the life of developers easy.



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // this wil render my parent inside my { div id = root }.
