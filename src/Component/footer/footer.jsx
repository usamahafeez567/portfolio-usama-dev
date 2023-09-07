import React from "react";
import "./footer.css";

function footer() {
  return (
    <div
      className="bg-dark text-center"
      style={{ color: "white", padding: "3% 5% 3% 10%" }}
    >
      <div className=" footericone">
        <a
          href="https://www.linkedin.com/in/musamahafeez/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-linkedin fa-xl linkdinn"
            style={{ color: "white" }}
          ></i>
        </a>
        <a
          href="https://github.com/usamahafeez567"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github fa-xl linkdinn"
            style={{ color: "white" }}
          ></i>
        </a>
        <a
          href="https://www.youtube.com/@usamahafeez567"
          target="_blank"
          rel="noreferrer"
        >
          <i
            class="fa-brands fa-youtube fa-xl linkdinn"
            style={{ color: "white" }}
          ></i>
        </a>
      </div>
      <small className="fottercontact">
        <b>
          Copyright © 2023. All rights reserved | This template is made with{" "}
          {"  "}
          <span className="fs-6" style={{ fontWeight: "600" }}>
            <a href="#home">
              <span>Usama</span>
              <span style={{ color: "white", fontWeight: "600" }}>.</span>
              <span>Dev</span>
            </a>
          </span>
        </b>
      </small>
    </div>
  );
}

export default footer;
