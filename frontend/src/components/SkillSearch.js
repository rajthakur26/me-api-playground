import React, { useState } from "react";

const SkillSearch = ({ onSearch }) => {
  const [skill, setSkill] = useState("");

  const handleSearch = () => {
    onSearch(skill);
  };

  return (
    <div className="mb-4">
      <input 
        type="text"
        className="form-control mb-2"
        placeholder="Search projects by skill..."
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SkillSearch;
