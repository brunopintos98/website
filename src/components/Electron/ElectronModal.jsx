import React from "react";

const ElectronModal = ({ isOpened, skill, onHoverRelease, setOpenSkill }) => (
  <div
    className="electron-modal-container"
    onMouseLeave={onHoverRelease}
    onClick={() => setOpenSkill(skill.key)}
    style={{
      height: isOpened ? 150 : 0,
      width: isOpened ? 150 : 0,
      padding: isOpened ? 12 : 0,
      paddingTop: isOpened ? 20 : 0,
    }}
  >
    <h3
      style={{ fontSize: isOpened ? 20 : 0, opacity: isOpened ? 1 : 0 }}
      className="electron-modal-text"
    >
      {skill.name}
    </h3>
  </div>
);

export default ElectronModal;
