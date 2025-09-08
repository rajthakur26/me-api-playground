import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = ({ skill }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let url = "https://me-api-playground-22ao.onrender.com/projects";
    if (skill) url += `/skill/${skill}`;
    axios.get(url)
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, [skill]);

  return (
    <div className="row">
      {projects.map(proj => (
        <div key={proj._id} className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{proj.title}</h5>
              <p className="card-text">{proj.description}</p>
              <p><strong>Skills:</strong> {proj.skills.join(", ")}</p>
              {proj.links.map((link, i) => (
                <a key={i} href={link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm me-2">Link {i+1}</a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
