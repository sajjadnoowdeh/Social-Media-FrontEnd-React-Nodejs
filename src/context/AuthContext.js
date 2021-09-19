import React, { useReducer } from "react"
import { createContext } from "react";
import { AuthReducerFunc } from "./AuthReducer";
let intialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const ContextAuth = createContext(intialState);
   
const ProviderAuth = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducerFunc, intialState);
  return (
    <ContextAuth.Provider
      value={{
        isFetching:state.isFetching,
        user:state.user,
        error:state.user,
        dispatch,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

export default ProviderAuth;
