import RestaurantCard from "./RestaurantCard"; 
import { useState, useEffect } from "react";       
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);
    
    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.626539179755998&lng=77.2992504760623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");// this fetch will fetch the data from the API, fetch returns a promise and to resolve a promise we will use Async - Await here.... hum .then .catch use kar sakte the... but hum wo use nahi karenge...

        // once we have the data we want to convert that data to JSON.

        const json = await data.json();

         console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     

        
    }

   


    

    if(listOfRestaurants?.length === 0 ){ 
        return <Shimmer />;
    }
    
   // conditional rendering { read about it... interview me as a jargon puch sakte hai...}

    // if(listOfRestaurants.length === 0){

    //    return <h1>Loading......</h1>
    // }

    // if(listOfRestaurants.length === 0){ // until this is true.... API has not responded with the data from the backend. So, tab tak ke liye.... aap shimmer UI show karo...

    //     return <Shimmer />
    //  }
 
    

    console.log(searchText);
    return (

            <div className="body">
                    <div className="filter">
                        
                        <div className="search">

                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value);

                        }}></input>
                        <button onClick={()=>{
                            // Filter the restaurant card and Update the UI on click of this button 
                            // we need searchText here, whatever we wrote in the input box.
                           
                           const filteredRestaurant =  listOfRestaurants.filter((res)=>{ 
                          return ( res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        //   console.log(res.info.name.toLowerCase(), searchText.toLowerCase(), res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                         })  
                        //  console.log(filteredRestaurant);

                         setFilteredRestaurant(filteredRestaurant);

                        }}>Search</button>

                        </div>
                        
                        
                        <button className="filter-btn" onClick={()=>{
                            // filter logic here

                            const filteredList = listOfRestaurants.filter( res  => res.info.avgRating > 4);
                            
                            setFilteredRestaurant(filteredList);

                        }}>Top Rated Restaurant </button>

                        <button onClick={()=>{
                          setFilteredRestaurant(listOfRestaurants);
                        }}>Reset Filter</button>
                    </div>
                    <div className="res-container">

                      {
                            filteredRestaurant?.map((restaurant) => (
                                  <Link  key = {restaurant.info.id} to={"/restaurants/"+restaurant.info.id }><RestaurantCard  resData={restaurant}/></Link>
                            ))
                      }
                       
                       
                    </div>
            </div>

    );
}

export default Body;