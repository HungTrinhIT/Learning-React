import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  return (
    <div className="card all-center">
      <img
        src={user.avatar_url}
        alt="user avatar"
        className="round-img my-1"
        style={{ width: "100px" }}
      />
      <p>{user.login}</p>
      <a href={user.html_url} className="btn btn-light">
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
