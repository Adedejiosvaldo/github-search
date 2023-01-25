import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../";
import { GithubContext } from "../context/github/GithubContext";

const Users = () => {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div></div>;
};

export default Users;
