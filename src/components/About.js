// import User from "./User";
import UserClass from "./UserClass";
import React, {Component} from "react";

class About extends Component {

    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
            console.log("Parent Component Did Mount")
        }

render(){ 
    console.log("Parent Render");

   return(
        <div>
            <h1>About</h1>
            <h2>Namaste React Web Series</h2>
            {/* <User name= {"Ajeet Kumar Kushwaha ( functional )"}/> */}

            <UserClass name= {"1st Child Ajeet, "}  location = {"Delhi Class"} />
            {/* 2 instance of the same class userClass */}
            {/* <UserClass name= {"2nd Child Elon Musk, "}  location = {"US"} /> */}
        </div>
        
       
       
    );
  }
  
}

export default About;

// const About = () => {

//     return (

//         <>
//         <div>
//             <h1>About</h1>
//             <h2>Namaste React Web Series</h2>
//             {/* <User name= {"Ajeet Kumar Kushwaha ( functional )"}/> */}

//             <UserClass name= {"Ajeet Kumar Kushwaha ( Classes )"}  location = {"Delhi Class"} />
//         </div>
        
//         </>
//     );
// };

