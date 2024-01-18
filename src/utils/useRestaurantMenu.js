import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {

      // Fetching the data logic. { We will fetch the data in exactly the same way as we did in the components....  }

      const [resInfo, setResInfo] = useState(null);

      useEffect(() => {
         fetchData();
      }, []);

      const fetchData = async () => {

      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);

      };   

      return resInfo; 
}

export default useRestaurantMenu;