import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../layout/spinner";
import Repos from "../repos/repos";

const UserDetail = ({
  loading,
  repos,
  user,
  getUser,
  getRepository,
  match,
}) => {
  useEffect(() => {
    const userName = match.params.login;
    getUser(userName);
    getRepository(userName);
    //eslint-disable-next-line
  }, []);
  const {
    login,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    location,
    hireable,
    bio,
    company,
    name,
    blog,
  } = user;

  if (loading) {
    <Spinner />;
  }
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left" style={{ marginRight: "8px" }} />
        Back to home
      </Link>
      <strong>Hierable</strong>:{" "}
      {hireable ? (
        <i className="fas fa-check-circle text-success" />
      ) : (
        <i className="fas fa-check-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="Avatar github user"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h2>{name}</h2>
          {location && (
            <span>
              <strong>Location:</strong> {location}
            </span>
          )}
        </div>

        <div>
          {bio && (
            <div>
              <h3>Bio</h3>
              <p>{bio}</p>
            </div>
          )}

          <p>
            <strong>Username:</strong> {login}
          </p>
          {company && (
            <p>
              <strong>Company:</strong> {company}
            </p>
          )}
          {blog && (
            <p>
              <strong>Blog:</strong>{" "}
              <a href={blog} target={"_blank"}>
                {blog}
              </a>
            </p>
          )}
          <a href={html_url} target={"_blank"} className="btn btn-dark my-1">
            Visit Github profile
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light"> Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default UserDetail;
