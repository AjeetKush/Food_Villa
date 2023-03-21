
 //import { restaurantList } from "../constants";
 import RestaurantCard from "./RestaurantCard";
 import React from "react";
 import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; /* This is default export */
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
    const [ allRestaurants , setAllRestaurants] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [ searchInput, setSearchInput] = useState("");

    // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    }

    // if allRestaurants is empty don't render restaurants cards
    if (!allRestaurants) return null;

    return filteredRestaurants.length ===  0 ? ( 
       <Shimmer />
    ) : (
    <React.Fragment>
        <div className="search-container">
            <input
               type="text"
               className="search-input"
               placeholder="Search"
               value={searchInput}
               onChange={(e)=> {
                   setSearchInput(e.target.value);
               }}
 
            />
            <button className="search-btn"
               onClick={ ()=>{
               // filter the data 
              const data=  filterData(searchInput, allRestaurants);

               //update the state restaurants
            
                   setFilteredRestaurants(data);
            
            } }
            
            >Search</button>
        </div>

        <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => {
                return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
            })}
        </div>
    </React.Fragment>
    );
};

export default Body;  