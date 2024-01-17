import React from "react";


class UserClass extends React.Component {

      constructor(props){
           super(props);

           this.state = {
               userInfo: { // this is basically a way to create dummy data 
                   name: "xyz",
                   location: "Default",
                   avatar_url: "avatar_url.com"
               }
           };

           console.log(this.props.name + "Child Constructor");

        }

         async componentDidMount(){
            console.log(this.props.name + "Child Component Did Mount");

            // Api call

            const data = await fetch(" https://api.github.com/users/AjeetKush");
            const json = await data.json();

            console.log(json);
            // now we will update the state variable which I got inside my API call.

            this.setState({
                userInfo : json,
            });



        }

        componentDidUpdate(){
            console.log("Component Did Update");
        }

        componentWillUnmount(){
            console.log("Component Will Unmount");
        }

    render() {
        const {name , location} = this.props; //Object De-structuring on the fly.
        const {count} = this.state;

        console.log( this.props.name + "Child Render");

        return(

        <div className = "user-card">
            {/* <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3> */}
            {/* <h1>Count: {count}</h1> */}
             {/* <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              })
            }>Count Inc</button> */}
            <img src={this.state.userInfo.avatar_url}></img>
            <h2>Name: {this.state.userInfo.login}</h2>
            <h3>Location: {this.state.userInfo.created_at}</h3>
            <h4>Contact: @beast_monk98</h4>
        </div>
        
        );
    }



};

export default UserClass;
