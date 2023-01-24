import React, { useState, useContext } from "react";
import { GithubContext } from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext.js";
const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const inputHandler = (e) => setText(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("You have to enter a text", "error");
    } else {
      //FetchData
      searchUsers(text);
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
          <button className='btn btn-ghost btn-lg' onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
