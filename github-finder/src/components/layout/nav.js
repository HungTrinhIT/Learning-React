import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ title }) => {
  return (
    <div className="bg-danger p-1">
      <i className="fab fa-github" /> {title}
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
