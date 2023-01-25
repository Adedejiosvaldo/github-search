import React, { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";
export const GithubContext = createContext();
const Github = process.env.REACT_APP_GITHUB_URL;
export const Provider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    user: {},
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //search users
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    setLoading();
    const data = await fetch(`${Github}/search/users?${params}`);
    const { items } = await data.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //Get User
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${Github}/users/${login}`);
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
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
        user: state.user,
        users: state.users,
        searchUsers,
        clearUsers,
        getUser,
      }}>
      {children}
    </GithubContext.Provider>
  );
};
