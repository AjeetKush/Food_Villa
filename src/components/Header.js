import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/useAuth";
import useLocalStorage from "../utils/useLocalStorage";

const Header = () => {

  const navigate = useNavigate();

  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  // call custom hook useAuth for user is loggedin or not
  const [isLoggedin, setIsLoggedin] = useAuth();

  useEffect(() => {
    // if value of getLocalStorage is equal to null setIsLoggedin to false
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage])

//     const [btnName, setBtnName ] = useState("Login");

    const onlineStatus = useOnlineStatus();

  //  const data = useContext(UserContext); // UserContext ka data, data variable me aa gaya.

  //  const { loggedInUser } = data;// extracted loggedInUser from data.

    // useSelector is hook, which coves from react-redux, which helps us to subscribe to the redux-store OR gives us access to the redux-store. Hooks at the end of the day are a normal JS function.

    // In simple terms we are now SUBSCRIBING TO THE STORE USING SELECTOR. This useSelector hook gives us access to our store but we will tell it, what portion of your store we need access to. So, this selector hook helps us to identify which portion of store we want to read { or subscribe to }.

    const cartItems = useSelector((store) => store.cart.items); // cartItems will get the data of the items, So, when ever my items will modify, my cartItems will also modify. { Remember that selector gives access to the whole store and we just want to access to the store.cart.items } { We are selecting the specific portion of  the store {store.cart.items}, NOT THE WHOLE STORE. }

    // console.log(cartItems);

   //  useEffect( ()=> {}, []);

    return(

      <div className="flex justify-between bg-pink-100 shadow-lg">

            <div className="logo-container">
                   <Link to="/"><img className="w-56 hover:cursor-pointer" src= {LOGO_URL} /></Link> 
            </div>

            <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                            <li className="px-4">
                                Online Status: { onlineStatus ? "🟢"  : "🔴"}
                            </li>
                            <li className="px-4"> <Link to="/">Home</Link></li>
                            <li className="px-4"><Link to="/about">About Us</Link></li>
                            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                            {/* <li className="px-4"><Link to="/grocery">Grocery</Link></li> */}
                            <li className="px-4 text-xl font-bold"> <Link to="/cart">🛒 Cart  ({cartItems.length})</Link></li>
                             {/* <button className="login" onClick={()=>{
                               btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                            }}>{btnName}</button> 

                            <li className="px-4 font-bold">{loggedInUser}</li> */}

       <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage()
                  setIsLoggedin(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
 </ul>

            </div>

      </div>

    );
}

export default Header; 