import React, { useState } from "react";
import constant from "../../constant.json";
import './Experience.css'

const Experience = () => {
  const [currentIdx, setCurrentIndex] = useState(0);

  return (
    <section id="experience">
      <div className="experience_container">
        <div className="experience_left">
          {
            (constant.experiences.map((experiences, idx) => (
              <div
                className={idx === currentIdx ? "experience_tab experience_active_tab" : "experience_tab"}
                onClick={() =>

                  setCurrentIndex(idx)}>
                {experiences.company}
                
              </div>
            
              
            )))
          }
        </div>
        <div className="experience_right">
          <h1 className="experience_tittle">
            {constant.experiences[currentIdx].tittle}
            <a href={constant.experiences[currentIdx].link} target="_blank">
              @{constant.experiences[currentIdx].company}
            </a>
          </h1>
          <p>{constant.experiences[currentIdx].duration}</p>
          {constant.experiences[currentIdx].desc.map((point) => (
            <p className="experience_desc">{point}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
