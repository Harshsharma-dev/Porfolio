import React from "react";
import "./Project.css";

function Project({title, image, link}) {
  return (
    <div className="project">
      <div className="project_info">
        <p>{title}</p>
        <p>Live Link</p>
        <p>Github</p>
      </div>

      <img src={image} />
    </div>
  );
}

export default Project;
