import React from "react";

import Repository from "../Repository/index";

export default function Profile({
  name,
  login,
  avatar,
  company,
  location,
  bio,
  repos,
}) {
  return (
    <>
      <div className="user-info">
        <img alt="Profile" src={avatar} />
        <h3>{name}</h3>
        <small>{login}</small>
        <span>{bio}</span>
        <span>{company}</span>
        <span>{location}</span>
      </div>

      <div className="repositories">
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <Repository
                name={repo.name}
                description={repo.description}
                url={repo.html_url}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
