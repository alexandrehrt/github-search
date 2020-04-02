import React, { useState } from "react";

import Profile from "../Profile/index";

import api from "../../services/api";

import "./styles.css";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [repos, setRepos] = useState([]);
  const [toggle, setToggle] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const response = await api.get(`${input}`);

      const { name, login, avatar_url, company, location, bio } = response.data;

      const repositorios = await api.get(`${input}/repos`);

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
    setToggle(true);
  }

  return (
    <div className="container">
      <h1>Github Search</h1>
      <section className="form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={input}
            placeholder="Digite o usuário"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </section>

      {toggle && (
        <section className="profile">
          <Profile
            name={name}
            login={login}
            avatar={avatar}
            company={company}
            location={location}
            bio={bio}
            repos={repos}
          />
        </section>
      )}
    </div>
  );
}
