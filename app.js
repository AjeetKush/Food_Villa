import React from "react";
import ReactDOM from "react-dom/client";

//              React Element

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React🚀");

// console.log(heading);

//              JSX { just another way to create React Element}

const Heading = <h1 id="heading">Namaste React Using JSX 🚀</h1>; // So, this is how we create a react element using JSX and the const heading we have created above is made using React.createElement and you know what is the fun fact => the JSX in the backend get coverted into React.createElement code before it is executed in the browser.

// JSX is transpiled before it go to JS engine { JSX code to React.createElement} => It is done by the parcel => the thing is that parcel uses another package to do this task... that is Babel. { babel is already present in the Parcel}

// if we are writting JSX in multiple lines then we need to use () these brackets around them and if it is single line so no need to use () these brackets.

// console.log(Heading);

//                               React  Functional Components

// BOTH ARE SAME SYNTAX.

// const HeadingComponent = () => {

//         return <h1>Namaste React Functional Component!!</h1>;
// }

// const HeadingComponent2 = () => ( 
// <h1>
//       Namaste React Functional Component!!
// </h1> 

// );

const Title = () => (

        <h1 className="head" tabIndex="5" > 
        Namaste React from title!!
        </h1>
);


const HeadingComponent = () => ( 
  <div ID = "container">

  <Title />  
  

  <h1 className="heading">
      Namaste React Functional Component!!
  </h1> 

  </div>

);

// <Title />  or <Title></Title> or { Title() }.... these three are same.
// { Title() }, this works because Title component is a normal js function at the end of the day and we can write/ run any piece of js inside of this {} inside jsx.


// now we have to render HeadingComponent into the root, so, what we have to do?
//  root.render(<HeadingComponent />);


//..................

// if you put { } in JSX, you can run any piece of javascript inside this { }, writing javascript inside of JSX is a very powerful thing.


// how to put the react element inside my react component? see react element is at the end of the day a normal js variable, so we can just put the name of that variable inside the { Name-of-the-react-Element};


const root = ReactDOM.createRoot(document.getElementById("root")); // this root will became root for our react app, what ever happen inside the react will happen in this root.



root.render(<HeadingComponent />);