import React from "react";
import PropTypes from "prop-types";
import UserItem from "./userItem";

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <img
        src="/images/spinner.gif"
        style={{ width: "200px", display: "block", margin: "auto" }}
        alt="spinner"
      />
    );
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
};
export default Users;
