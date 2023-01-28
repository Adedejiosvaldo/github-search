import React, { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";
export const GithubContext = createContext();
const Github = process.env.REACT_APP_GITHUB_URL;
export const Provider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    repos: [],
    user: {},
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  );
};
