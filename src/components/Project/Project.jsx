import React from "react";
import "./project.scss";
function Project(props) {
  return (
    <div>
      <div className="project">
        <div className="project__box text-center">
          <i className="fas fa-file-invoice fa-2x text-white mb-3"></i>
            <h3 className="text-white">Create your first GitHub project</h3>
            <p>Projects are a customizable, flexible tool for planning and tracking your work.</p>
            <button className="project-btn">New project</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
