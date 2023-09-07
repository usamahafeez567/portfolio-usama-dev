import React from "react";
import "./home.css";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import js from "../../Assets/js.jpg";
import reactjs from "../../Assets/reactjs.png";
import mern from "../../Assets/mern.png";
import bootstrap from "../../Assets/bootstrap.png";
import node from "../../Assets/node.png";
import mongo from "../../Assets/mongo.png";
import { Zoom } from "react-reveal";

const home = () => {
  return (
    <>
      <div className="bg-color" id="home">
        <div className="container home-main">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="h1-text-main py-3">
                Front-End Reactjs <br />
                Developer <span>👋🏻</span>
              </h1>

              <p className="p-text-main py-3">
                Hi - I'm Muhammad Usama. I'm MERN Stack & Reactjs Frontend
                Developer. A passionate website developer with industrial
                experience.
              </p>
              <p className="span-text-main">
                <b>Based in Lahore, Pakistan</b>
                <i class="bi bi-geo-alt-fill" style={{ color: "black" }}></i>
              </p>
              <div className="icon-social-media my-5">
                <a
                  href="https://www.linkedin.com/in/musamahafeez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-linkedin fa-xl icon-main mx-2"></i>
                </a>
                <a
                  href="https://github.com/usamahafeez567"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github fa-xl icon2-main mx-2"></i>
                </a>
                <a
                  href="https://www.youtube.com/@usamahafeez567"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-youtube fa-xl icon2-main mx-2"></i>
                </a>
                <a
                  href="https://www.google.com/@usamahafeez567"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-google fa-xl icon2-main mx-2"></i>
                </a>
              </div>
            </div>
            <Zoom top>
              <div className="col-lg-6 ">
                <div className="hero-img"></div>
              </div>
            </Zoom>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h1 className="main-second text-center">
                Tech Stack <i class="fa-brands fa-dev"></i>
                <b> |</b>
              </h1>
            </div>
            <div className="col-lg-8">
              <div className="language-container">
                <span id="cssbg">
                  <img className="languageimg my-2 mx-2" src={html} alt="" />
                </span>
                <span id="cssbg">
                  <img className="languageimg my-2 mx-2" src={css} alt="" />
                </span>
                <span id="cssbg">
                  <img
                    className="languageimg my-2 mx-2"
                    src={bootstrap}
                    alt=""
                  />
                </span>
                <span id="cssbg">
                  <img className="languageimg my-2 mx-2" src={js} alt="" />
                </span>
                <span id="cssbg">
                  <img className="languageimg my-2 mx-2" src={reactjs} alt="" />
                </span>
                <span id="cssbg">
                  <img className="languageimg my-2 mx-2" src={node} alt="" />
                </span>
                <span id="cssbg">
                  <img className="languageimg my-2 mx-2" src={mongo} alt="" />
                </span>
                <span id="cssbg">
                  <img className="languageimg my-2 mx-2" src={mern} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3"></div>
      </div>
    </>
  );
};

export default home;
