import React, { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";
export const GithubContext = createContext();
const Github = process.env.REACT_APP_GITHUB_URL;
export const Provider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const fetchUsers = async () => {
    setLoading();
    const data = await fetch(`${Github}/users`);
    const response = await data.json();

    dispatch({
      type: "GET_USERS",
      payload: response,
    });
  };
  const setLoading = () => dispatch({ type: "SET_LOADING_TRUE" });
  return (
    <GithubContext.Provider
      value={{ loading: state.loading, users: state.users, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};
