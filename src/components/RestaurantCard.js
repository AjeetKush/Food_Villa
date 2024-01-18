import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {


    const { resData } = props;

    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
   // console.log(props); props normal js object baan ke pass hote hai... { From parent component to child component. }
    return (
      <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300"  >
        <img className ="rounded-lg" src = { CDN_URL + cloudinaryImageId } />

        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>

      </div>

    );
}

export default RestaurantCard;