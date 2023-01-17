import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
   const { theme } = useContext(ThemeContext);

   const skillBoxStyle = {
      backgroundColor: theme.secondary,
      boxShadow: `0px 0px 30px ${theme.primary30}`,
   };

   return (
      <div className="skills" style={{ backgroundColor: theme.secondary }}>
         <div className="skillsHeader">
            <h2 style={{ color: theme.primary }}>Skills</h2>
         </div>
         <div className="skillsContainer">
            <div className="skill--scroll">
               <h1 className="skillsHeader skillHead">Front-End Development</h1>
               <Marquee
                  gradient={false}
                  speed={80}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
               >
                  {skillsData.frontEnd.map((skill, id) => (
                     <div
                        className="skill--box front-end"
                        key={id}
                        style={skillBoxStyle}
                     >
                        <img src={skillsImage(skill)} alt={skill} />
                        <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                     </div>
                  ))}
               </Marquee>
            </div>
            <div className="skillsContainer">
               <div className="skill--scroll">
                  <h1 className="skillsHeader skillHead">Back-End Engineering</h1>
                  <Marquee
                     gradient={false}
                     speed={80}
                     pauseOnClick={true}
                     delay={0}
                     play={true}
                     direction="right"
                  >
                     {skillsData.backEnd.map((skill, id) => (
                        <div
                           className="skill--box back-end"
                           key={id}
                           style={skillBoxStyle}
                        >
                           <img src={skillsImage(skill)} alt={skill} />
                           <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                        </div>
                     ))}
                  </Marquee>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
