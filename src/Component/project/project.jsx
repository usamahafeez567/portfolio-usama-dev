import React, { useState, useEffect } from "react";
import "./project.css";
import { Zoom } from "react-reveal";
import ProjectData from "./projectData";

export default function Project() {
  const [items, setItems] = useState(ProjectData);

  useEffect(() => {
    // Intersection Observer Callback Function
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    };

    // Options for the Intersection Observer
    const options = {
      threshold: 0.5, // Adjust this threshold as needed to trigger the animation at the desired point
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe all elements with class 'secoundiv'
    const secoundivElements = document.querySelectorAll(".secoundiv");
    secoundivElements.forEach((el) => observer.observe(el));

    // Clean up the Intersection Observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-light Projectss" id="project">
        <div className="container mt-5 " style={{ padding: "0% 10% 10% 10%" }}>
          <div className="row ">
            <div className="col-sm-12 text-center" id="portfolio">
              <h2 style={{ color: "blue" }}>
                <b>PORTFOLIO</b>
              </h2>
              <h2>
                <b>
                  Each project is a unique piece of development
                  <img
                    className="ps-2"
                    width="58"
                    height="58"
                    src="https://img.icons8.com/fluency/48/laptop-coding.png"
                    alt="laptop-coding"
                  />
                </b>
              </h2>
            </div>
          </div>

          {items.map((value, index) => {
            return (
              <div
                className={`bg-white secoundiv mt-5 ${
                  index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                }`}
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <Zoom>
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div class="cardss p-0">
                          {/* <img src={p1} alt="" id='pimg'/> */}
                          <a
                            href={value.livelink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <p
                              className="pimg"
                              style={{
                                backgroundImage: `url('${value.image}')`,
                              }}
                            ></p>
                          </a>
                        </div>
                      </div>
                    </Zoom>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <h4 className="title text-center pb-1 mt-5">
                        <b>{value.title}</b>
                      </h4>
                      <div className="line"></div>
                      <p className="desc mt-3 text-center p-3">
                        <small>{value.desc}</small>
                      </p>
                      <div className="text-center mt-5">
                        <a
                          href={value.githublink}
                          target="_blank"
                          className="hov"
                          rel="noreferrer"
                        >
                          Code
                          <i
                            className="ps-2 fa-brands fa-github fa-xl ico"
                            style={{ color: "#000000;" }}
                          ></i>
                        </a>
                        <a
                          href={value.livelink}
                          target="_blank"
                          className="hov"
                          rel="noreferrer"
                        >
                          Live Demo
                          <i class="ps-2 fa-solid fa-wand-magic-sparkles icoo"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import "./project.css";
// import { Zoom } from "react-reveal";
// import ProjectData from "./projectData";

// export default function Project() {
//   const [items, setItems] = useState(ProjectData);

//   return (
//     <>
//       <div className="bg-light Projectss" id="project">
//         <div className="container mt-5 " style={{ padding: "0% 10% 10% 10%" }}>
//           <div className="row ">
//             <div className="col-sm-12" id="portfolio">
//               <h2 style={{ color: "blue" }}>
//                 <b>PORTFOLIO</b>
//               </h2>
//               <h2>
//                 <b>Each project is a unique piece of development 🧩</b>
//               </h2>
//             </div>
//           </div>

//           {items.map((value) => {
//             return (
//               <div className="bg-white secoundiv mt-5">
//                 <div className="container">
//                   <div className="row">
//                     <Zoom>
//                       <div className="col-sm-6">
//                         <div class="cardss p-0">
//                           {/* <img src={p1} alt="" id='pimg'/> */}
//                           <a
//                             href={value.livelink}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <p
//                               className="pimg"
//                               style={{
//                                 backgroundImage: `url('${value.image}')`,
//                               }}
//                             ></p>
//                           </a>
//                         </div>
//                       </div>
//                     </Zoom>
//                     <div className="col-sm-6">
//                       <h4 className="title text-center pb-1 mt-5">
//                         <b>{value.title}</b>
//                       </h4>
//                       <div className="line"></div>
//                       <p className="desc mt-3 text-center p-3">
//                         <small>{value.desc}</small>
//                       </p>
//                       <div className="text-center mt-5">
//                         <a
//                           href={value.githublink}
//                           target="_blank"
//                           className="hov"
//                           rel="noreferrer"
//                         >
//                           Code
//                           <i
//                             className="fa-brands fa-github fa-xl ico"
//                             style={{ color: "#000000;" }}
//                           ></i>
//                         </a>
//                         <a
//                           href={value.livelink}
//                           target="_blank"
//                           className="hov"
//                           rel="noreferrer"
//                         >
//                           Live Demo
//                           <i class="fa-solid fa-wand-magic-sparkles icoo"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// Project.js
