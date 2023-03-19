
 import { restaurantList } from "../constants";
 import RestaurantCard from "./RestaurantCard";
 import React from "react";
 import { useState } from "react";
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
    const [ restaurants, setRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput]=useState("");
    return (
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
              const data=  filterData(searchInput, restaurants);

               //update the state restaurants
            
              setRestaurants(data);
            
            } }
            
            >Search</button>
        </div>

        <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
            })}
        </div>
    </React.Fragment>
    );
};

export default Body; 