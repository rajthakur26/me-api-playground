import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileView = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/profile")
      .then(res => setProfile(res.data[0]))
      .catch(err => console.log(err));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{profile.name}</h2>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Education:</strong> {profile.education}</p>
        <p><strong>Work:</strong> {profile.work}</p>
        <p><strong>Skills:</strong> {profile.skills.join(", ")}</p>
        <p>
          <strong>Links:</strong>{" "}
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>{" | "}
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{" | "}
          <a href={profile.links.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
        </p>
      </div>
    </div>
  );
};

export default ProfileView;
