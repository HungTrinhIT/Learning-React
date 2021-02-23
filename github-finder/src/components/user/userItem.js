import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

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
      <Link to={`/user/${user.login}`} className="btn btn-light">
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
