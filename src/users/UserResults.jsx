import React, { useContext, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { UserItems } from "./UserItems";
import { Provider } from "../context/github/GithubContext";
const UserResults = () => {
  const { loading, users, fetchUsers } = useContext(Provider);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className=' container  px-4 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;