import React, { useState, useContext } from "react";
import { GithubContext } from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext.js";
import { searchUsers } from "../context/github/GithubAction";
const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const inputHandler = (e) => setText(e.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("You have to enter a text", "error");
    } else {
      //FetchData
      dispatch({
        type: "SET_LOADING_TRUE",
      });
      const users = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
      setText("");
    }
  };

  return (
    <div className='grid p-10 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div className=''>
        <form onSubmit={submitHandler} action=''>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                className='w-full pr-40 bg-gray-200 input input-lg text-black '
                value={text}
                onChange={inputHandler}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div className=''>
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => dispatch({ type: "CLEAR_USERS" })}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
