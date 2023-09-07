import React from "react";
import about from "../../Assets/abouttwo1.png";
import "./about.css";
import { Zoom } from "react-reveal";
function About() {
  return (
    <section className="aboutsection" id="about">
      <div className="container py-lg-5 py-md-5 my-5">
        <div className="row ">
          <Zoom top>
            <div className="col-lg-6 col-md-12 col-sm-6">
              <img className="aboutimg" src={about} alt="" />
            </div>
          </Zoom>
          <div className="col-lg-6 col-md-12 col-sm-6 py-3 about-all-section">
            <h2 style={{ color: "blue" }} className="about-text">
              <b>About Me</b>
            </h2>
            <h2 className="about-title py-1">
              <b>
                A dedicated Full Stack Developer & Frontend based in Pakistan
                <i
                  class="bi bi-geo-alt-fill fs-3"
                  style={{ color: "black" }}
                ></i>
              </b>
            </h2>
            <p className="aboutmecontent py-1">
              <small>
                Hi, I am Muhammad Usama. I am MERN Stack and Reactjs Frontend
                Development. A passionate Website Developer with industrial
                experience. I possess an impressive arsenal of skills in HTML,
                CSS, JavaScript, React, BootStrap, and Asp.Net Core. I excel in
                designing and maintaining responsive websites that offer a
                smooth user experience. I really like my job. I use all my
                experience to create unique Projects that connect brands and
                companies with their customers. My goal is to boost your
                business to the highest level. I can help you with your websites
                for your company.
              </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
