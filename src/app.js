import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
// import Grocery from "./components/Grocery";

// lazy is a function given to us by react. 

// we will import Grocery component using lazy function, which come from react library and it takes a callback function and this call back function uses => function import which takes the path of that component{ Grocery in this case }. 
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

        return (
            <Provider store={appStore}>
                <div className="app">
                        <Header />
                        <Outlet />
                        <Footer />
                </div>
            </Provider>    

        );
}



const appRouter = createBrowserRouter([
        {
             path: "/",
             element: <AppLayout />,
             children: [
                {
                path: "/",
                element: <Body />
                },
                {
                path: "/about",
                element: <About />
                },
                {
                path: "/contact",
                element: <Contact />
                },
                // {
                // path: "/grocery",
                // element: <Suspense fallback = {<h1>Loading.....</h1>}><Grocery /></Suspense>,
                // },
                {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
                },
                {
                 path:"/cart",
                 element: <Cart />
                },
                 {
                 path: "/login",
                 element: <Login />,
                },


             ],
             errorElement: <Error />
        },
        
       
]);

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter} />);


