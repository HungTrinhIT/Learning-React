import React from "react";
import RepoItem from "./repoItem";

const Repos = ({ repos }) => {
  return (
    <div>
      <h2>Repositories</h2>
      <div className="grid-2">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Repos;
