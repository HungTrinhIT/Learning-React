import React from "react";

const RepoItem = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    forks_url,
    owner,
    languages_url,
    fork,
  } = repo;
  return (
    <div className="card">
      <a href={html_url} target={"_blank"}>
        <h3>{name}</h3>
      </a>
      <p style={{ marginBottom: "16px", fontSize: "14px", color: "gray" }}>
        {fork && (
          <span>
            Forked from{" "}
            <a href={forks_url} target={"_blank"}>{` ${forks_url}`}</a>
          </span>
        )}
      </p>
      <p>{description && description.slice(0, 150) + "..."}</p>
    </div>
  );
};

export default RepoItem;
