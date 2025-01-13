import React, { useEffect, useMemo, useRef } from "react";

import { Close } from "assets";
import { findByKey } from "utils/skills";

import "./styles.css";
import { Typography } from "theme";
import SkillsList from "components/SkillsList";

const SkillModal = ({ openSkill, setOpenSkill }) => {
  const skill = useMemo(() => findByKey(openSkill), [openSkill]);
  const scrollable = useRef();

  useEffect(() => {
    scrollable.current?.scrollTo(0, 0);
  }, [openSkill]);

  return (
    !!skill && (
      <div className="modal-background-container">
        <div className="modal-container">
          <img
            src={Close}
            alt="close"
            className="modal-close-icon"
            onClick={() => setOpenSkill(null)}
          />
          <div className="modal-left-container">
            <div className="modal-image-container">
              {skill.images.map((image) => (
                <img
                  src={image.image}
                  alt={image.alt}
                  key={image.key}
                  className={`modal-image ${
                    openSkill === 1 && "modal-image-1"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="modal-right-container" ref={scrollable}>
            <h1 style={Typography.styles.modalTitle}>{skill.name}</h1>
            <p style={Typography.styles.modalParagraph}>{skill.description1}</p>
            <p style={Typography.styles.modalParagraph}>{skill.description2}</p>
          </div>
        </div>
        {window.innerWidth > 450 && <SkillsList setOpenSkill={setOpenSkill} />}
      </div>
    )
  );
};

export default SkillModal;
