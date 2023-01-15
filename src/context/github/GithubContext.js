import React, { createContext, useState } from "react";
const GithubContext = createContext();
const Github = process.env.REACT_APP_GITHUB_URL;
// console.log(process.env.REACT_APP_GITHUB_URL)
export const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const data = await fetch(`${Github}/users`);
    const response = await data.json();
    setUsers(response);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ loading, users, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
