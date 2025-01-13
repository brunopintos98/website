import React from "react";
import skills from "utils/skills";
import { isBrowser } from "react-device-detect";

import "./styles.css";

const SkillsList = ({ setOpenSkill, setHoveredSkill }) => (
  <div className="skills-list-container">
    {skills.map((skill) => (
      <div
        key={skill.key}
        className="skills-list-item"
        onClick={() => setOpenSkill(skill.key)}
        onMouseEnter={() => isBrowser && setHoveredSkill?.(skill.key)}
        onMouseLeave={() => isBrowser && setHoveredSkill?.(null)}
      >
        <span className="skills-list-name">{skill.name}</span>
      </div>
    ))}
  </div>
);

export default SkillsList;
