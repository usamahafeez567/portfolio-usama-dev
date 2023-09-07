import React from "react";
import "./skill.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Bounce } from "react-reveal";

function skill() {
  return (
    <section id="experience" className="experience">
      <h2 style={{ color: "blue" }} className="text-center">
        <b>SKILLS</b>
        <h3 className="pt-3" style={{ color: "black" }}>
          <b>I'm the missing puzzle piece for your tech team! 🧩</b>
        </h3>
      </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <Bounce left cascade>
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">HTML</h4>
                  <small className="text-dark">Experienced</small>
                </div>
              </article>
              {/* </Bounce> */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">CSS</h4>
                  <small className="text-dark">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">JavaScript</h4>
                  <small className="text-dark">Intermmediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">Reactjs</h4>
                  <small className="text-dark">Intermmediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">BootStrap</h4>
                  <small className="text-dark">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">Nextjs</h4>
                  <small className="text-dark">Basic</small>
                </div>
              </article>
            </div>
          </Bounce>
        </div>

        <div className="experience__backend">
          <Bounce right cascade>
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">Nodejs</h4>
                  <small className="text-dark">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">MongoDB</h4>
                  <small className="text-dark">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">MySQL</h4>
                  <small className="text-dark">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">Expressjs</h4>
                  <small className="text-dark">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">PHP</h4>
                  <small className="text-dark">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4 className="hfour">Ajax</h4>
                  <small className="text-dark">Basic</small>
                </div>
              </article>
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
}

export default skill;
