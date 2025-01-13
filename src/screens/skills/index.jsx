import React, { useState } from "react";

import Header from "components/Header";
import Electron from "components/Electron";
import SkillModal from "components/SkillModal";
import { BackgroundReact } from "assets";
import skills from "utils/skills";

import "./styles.css";
import SkillsList from "components/SkillsList";

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills-container">
      <Header selected="skills" />
      <div className="skills-electrons-container">
        <img
          src={BackgroundReact}
          alt="background"
          className="skills-background-image"
        />
        <h1 className="skills-title">SKILLS</h1>
        {skills.map((skill, index) => (
          <Electron
            key={skill.key}
            rotate={Math.floor(index % 3) * 120}
            skill={skill}
            setOpenSkill={setOpenSkill}
            hoveredSkill={hoveredSkill}
            setHoveredSkill={setHoveredSkill}
          />
        ))}
      </div>
      <SkillsList
        setOpenSkill={setOpenSkill}
        setHoveredSkill={setHoveredSkill}
      />
      <SkillModal openSkill={openSkill} setOpenSkill={setOpenSkill} />
    </div>
  );
};

export default Skills;
