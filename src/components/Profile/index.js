import React from "react";

import "./styles.css";

export default function Profile() {
  return (
    <div className="container">
      <img
        alt="Profile picture"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Antu_system-switch-user.svg/768px-Antu_system-switch-user.svg.png"
      />
      <span>Nome</span>
      <small>Login</small>
      <span>Bio</span>
      <span>Company</span>
      <span>location</span>
    </div>
  );
}
