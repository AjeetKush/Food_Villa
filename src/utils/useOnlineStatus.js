import { useEffect, useState } from "react";

 // before writting a custom hook think about what is the contract { what you want and what you have to return } this will make writting a custom hook easy. { in this case we donot need any specific input but we have to returrn the onlineStatus of the user. }

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true); // initial value of onlineStatus is true. { that means your internet is working fine. }

  // Check if we are online or offline. 
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;