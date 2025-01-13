import React, { useCallback } from "react";
import { isBrowser } from "react-device-detect";

import "./styles.css";
import useWindowDimensions from "utils/useWindowDimensions";
import ElectronModal from "./ElectronModal";

const Electron = ({
  rotate = 0,
  skill,
  setOpenSkill,
  hoveredSkill,
  setHoveredSkill,
}) => {
  const { height, width } = useWindowDimensions();

  const onHover = useCallback(() => {
    if (isBrowser) {
      setHoveredSkill(skill.key);
    }
  }, [setHoveredSkill, skill.key]);

  const onHoverRelease = useCallback(() => {
    if (isBrowser) {
      setHoveredSkill(null);
    }
  }, [setHoveredSkill]);

  return (
    <div
      className={`image-container orbit${rotate} ${
        isBrowser && hoveredSkill === skill.key ? "stop-animation" : ""
      }`}
      style={
        width > height
          ? {
              transform: `rotate(${rotate}deg)`,
              height: "18vh",
              top: "calc(50% - 9vh)",
              left: "calc(50% - 9vh)",
              zIndex: hoveredSkill === skill.key ? 3 : 1,
            }
          : {
              transform: `rotate(${rotate}deg)`,
              width: "18vw",
              top: "calc(50% - 9vw)",
              left: "calc(50% - 9vw)",
              zIndex: hoveredSkill === skill.key ? 3 : 1,
            }
      }
    >
      <div
        className="electron"
        onMouseEnter={onHover}
        onClick={() => setOpenSkill(skill.key)}
      />
      <ElectronModal
        isOpened={hoveredSkill === skill.key}
        skill={skill}
        onHoverRelease={onHoverRelease}
        setOpenSkill={setOpenSkill}
      />
    </div>
  );
};

export default Electron;
