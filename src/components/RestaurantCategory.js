import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex } ) => {

    // const [showItems, setShowItems] = useState(false);// by default let this accordion be closed.
    // We want to give the power to show the accordion data to RestaurantMenu and not to RestaurantCategory. It will help in buliding the feature that only one accordian data is shown and if other accordion is clicked So, the previously opened accordian just collapses. { and only single accordian is shown. } 
    

    // console.log(data);

    //  this function will show and hide our item list.
    // const handleClick = () => {
         //setShowItems(!showItems);// if showItems is true, So, make it false. If showItems is false, So, make it true.

    // }

    const handleClick = () => {
     setShowIndex();// we are updating the state variable of the parent in the child component in-direclty.

    }

       return (
        <div>
            
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            {/* Accordion Header */}  
            <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
              <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
              <span>⬇️</span>  
            </div>  
                

            {/* Accordion Body, which I want to hide and show, this items list is in the UI layer, now i want to show and hide from the data layer, So, we have to work on the data layer => So, data has state variable and that state variable will decide whether this data will be shown or not*/}
            
            {showItems && <ItemList items={data.itemCards}/>}
              
            </div>
           

        </div>

       );


}

export default RestaurantCategory;