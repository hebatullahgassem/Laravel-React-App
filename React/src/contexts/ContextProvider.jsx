import { createContext, useContext, useState } from "react";

//1- create context and pass default values
const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
});

//2- create provider
export const StateContextProvider = ({children}) => {
  const [user, setUser] = useState({
    name: 'hebatullah'
  });
  const [token, _setToken] = useState(null);

  //this function accept the token and call _settoken and save token in localstorage
  const setToken = (token) => {
    _setToken(token);

    if(token){
      //set token in local storage if exist
      localStorage.setItem('ACCESS TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS TOKEN');
    }
  }

//3- create value object
const value = {
  user,
  setUser,
  token,
  setToken
}

//4- Providing Context:
  return(<StateContext.Provider value={value}> {children} </StateContext.Provider>);
}

//to easily access context provider
export const useStateContext = () => useContext(StateContext);