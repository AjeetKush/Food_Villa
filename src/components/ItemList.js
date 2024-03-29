import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    // console.log(items);

    const dispatch = useDispatch();// to read data from the store we have useSelector hook, similarly to dispatch we have useDespatch hook and this gives us dispatch and this dispatch is a function.

    const handleAddItem = (item)=>{
        // Dispatch an action on the click of this button
        dispatch(addItem(item));// we dispatched this addItem action and whatever we put inside addItem, it will go inside my cart, ex:= addItem("pizza") this pizza is my action.payload
                          
    }


    return ( 
        // for each category, we have various Category Items
        
        <div>
            {/* map through the array of items and create a list item for each one */}
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                   
                 

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> : ₹{item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div> 

                    <div className="w-3/12 p-4">
                          
                          <button className="p-2 mx-20 rounded-lg bg-white shadow-lg absolute text-green-400 hover:shadow-lg shadow-gray-100"
                          onClick={() => handleAddItem(item)}
                          > ADD + </button>
                          <img src={CDN_URL + item.card.info.imageId}  alt="🎃🍛"/>
                    </div>

                    
                         
                </div>
            ))}
        </div>
    );
}

export default ItemList;
