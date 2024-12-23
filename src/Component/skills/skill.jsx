import React from "react";
import "./skill.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Bounce } from "react-reveal";

const skills = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "Reactjs", level: "Expert" },
      { name: "Nextjs", level: "Experienced" },
      { name: "SASS", level: "Experienced" },
      { name: "MUI", level: "Expert" },
      { name: "Ant Design", level: "Experienced" },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Nodejs", level: "Expert" },
      { name: "MongoDB", level: "Expert" },
      { name: "Expressjs", level: "Expert" },
      { name: "PHP", level: "Experienced" },
      { name: "MYSQL", level: "Experienced" },
      { name: "Ajax", level: "Experienced" },
    ],
  },
  deployment: {
    title: "DevOps",
    skills: [
      { name: "AWS", level: "Expert" },
      { name: "EC2", level: "Expert" },
      { name: "Cloudfront", level: "Expert" },
      { name: "S3 Bucket", level: "Expert" },
      { name: "Netlify", level: "Experienced" },
    ],
  },
  tools: {
    title: "Development Tools",
    skills: [
      { name: "VS Code", level: "Expert" },
      { name: "Postman", level: "Expert" },
      { name: "Swagger", level: "Expert" },
      { name: "Github", level: "Expert" },
      { name: "Gitflow", level: "Experienced" },
      { name: "CICD", level: "Experienced" },
    ],
  },
};

function Skill() {
  return (
    <section id="experience" className="experience">
      <h2 style={{ color: "blue" }} className="text-center">
        <b>SKILLS</b>
        <h3 className="pt-3" style={{ color: "black" }}>
          <b>I'm the missing puzzle piece for your tech team! 🧩</b>
        </h3>
      </h2>
      <div className="container experience__container">
        {Object.keys(skills).map((categoryKey) => {
          const category = skills[categoryKey];
          return (
            <div
              key={categoryKey}
              className={`experience__${categoryKey}`}
            >
              <Bounce
                left={categoryKey === "frontend"}
                right={categoryKey === "backend"}
                bottom={categoryKey === "deployment"}
                up={categoryKey === "tools"}
                cascade
              >
                <h3>{category.title}</h3>
                <div className="experience__content">
                  {category.skills.map((skill, index) => (
                    <article
                      key={index}
                      className="experience__details"
                    >
                      <BsPatchCheckFill className="experience__details-icons" />
                      <div>
                        <h4 className="hfour">{skill.name}</h4>
                        <small className="text-dark">{skill.level}</small>
                      </div>
                    </article>
                  ))}
                </div>
              </Bounce>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skill;
