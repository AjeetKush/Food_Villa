
import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/* My Food App structure will look like this, 
            1) Header
                - Logo (title)
                - Nav Items(right side) navigaton bar
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card (manycards)
                        - Image
                        - Name
                        - Rating
                        - Cusines
            3) Footer
                - Links
                - Copyrights
       
*/

const AppLayout = () => {
    return (
        <> {/* // this is React.Fragment */}
         <Header />
         <Body />
         <Footer />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <AppLayout />);

