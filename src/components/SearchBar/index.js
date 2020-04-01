import React, { useState } from "react";

import api from "../../services/api";

import "./styles.css";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [repos, setRepos] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const response = await api.get(`${input}`);

      const { name, login, avatar_url, company, location, bio } = response.data;

      const repositorios = await api.get(`${input}/repos`);
      console.log(repositorios);

      setName(name);
      setLogin(login);
      setAvatar(avatar_url);
      setCompany(company);
      setLocation(location);
      setBio(bio);
      setRepos(repositorios.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="container">
      <section className="form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={input}
            placeholder="Digite o nome do usuário"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </section>

      <section className="profile">
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
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
