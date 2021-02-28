import React, { useContext } from "react";
import UserItem from "./userItem";
import Spinner from "../layout/spinner";
import GithubContext from "../../context/github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map((user) => (
          <UserItem key={user.node_id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
