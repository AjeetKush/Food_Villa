
import React from "react";
import ReactDOM  from "react-dom/client";






const heading = (<h1 id="title" key="h1">Namaste React!!!!</h1>);

const HeaderComponent = () => {
    return (<div>
        { heading }
        <h1>hello world!!!!</h1>
        <h2>this is h2 tag</h2>
    </div>
    );
} ;

/* const HeaderComponent2 = () => (
    <div>
        <h1>hello world!!!!</h1>        how to write without return statment
        <h2>this is h2 tag</h2>
    </div>
    ); */



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <HeaderComponent />);

