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

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    // console.debug(object);
    setLoading();
    const data = await fetch(`${Github}/search/users?${params}`);
    const { items } = await data.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  const setLoading = () => dispatch({ type: "SET_LOADING_TRUE" });
  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};
