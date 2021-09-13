import { createContext } from "react";
import { AuthReducer } from "./AuthReducer";
import React from "react"
const intialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const ContextAuth = createContext(intialState);

const ProviderAuth = ({ children }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, intialState);
  return (
    <ContextAuth.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

export default ProviderAuth;
