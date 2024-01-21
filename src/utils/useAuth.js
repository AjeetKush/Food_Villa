import { useState, useEffect } from "react";
import useLocalStorage from "../utils/useLocalStorage";

const useAuth = () => {
  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage] = useLocalStorage("user");

  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(!!getLocalStorage?.token);

  useEffect(() => {
    // Update isLoggedin state whenever localStorage changes
    setIsLoggedin(!!getLocalStorage?.token);
  }, [getLocalStorage]);

  return [isLoggedin, setIsLoggedin];
};

export default useAuth;
