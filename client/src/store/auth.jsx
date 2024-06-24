//use of Context API
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState("");
  const [solutions, setSolutions] = useState("");
  const authorizationToken = `Bearer ${token}`;
  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("logged", isLoggedIn);

  // tackling the logout functionality

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT AUTHENTICATION - to get the currently loggedIN user data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if(response.ok){
        const data = await response.json();
        console.log('user data', data.userData);
        setUser(data.userData);
        setIsLoading(false);
      }else {
        setIsLoading(false);
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //to fetch the services data from the database
  const getServices = async () => {
    try{
      const response = await fetch("http://localhost:5000/api/data/service",{
        method: "GET",
      });
      if(response.ok){
        const data = await response.json();
        console.log(data.data);
        setServices(data.data);
      }
    }
    catch(error){
      console.log("services", error)
    }
  }
  //to fetch the solutions data from the database
  const getSolutions = async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/data/chall",{
        method:"GET",
      })
      if(response.ok){
        const data = await response.json();
        console.log(data.data);
        setSolutions(data.data);
      }
    } catch (error) {
      console.log("solutions", error)
    }
  }
  useEffect(() => {
    getServices();
    getSolutions();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading, solutions}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
