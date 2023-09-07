import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "../errorhandling/error";

const routers = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};
export default routers;

//     <>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/project" element={<Project />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/resume" element={<Resume />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   </>
