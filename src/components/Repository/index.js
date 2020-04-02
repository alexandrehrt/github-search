import React from "react";

export default function Repository({ name, description, url }) {
  return (
    <div className="repository">
      <a href={url}>{name}</a>
      <span>{description}</span>
    </div>
  );
}
