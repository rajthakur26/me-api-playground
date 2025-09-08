import React, { useState } from "react";
import ProfileView from "./components/ProfileView";
import ProjectList from "./components/ProjectList";
import SkillSearch from "./components/SkillSearch";

function App() {
  const [skillFilter, setSkillFilter] = useState("");

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Me-API Playground</h1>
      <ProfileView />

    
      <SkillSearch onSearch={(skill) => setSkillFilter(skill)} />

      <ProjectList skill={skillFilter} />
    </div>
  );
}

export default App;
