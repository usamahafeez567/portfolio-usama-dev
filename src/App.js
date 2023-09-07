import "./App.css";
import Project from "./Component/project/project";
import About from "./Component/about/about";
// import Resume from "./Component/resume/resume";
import Contact from "./Component/contact/contact";
import Home from "./Component/home/home";
import Navbar from "./Component/navbar/navbar";
import Skills from "./Component/skills/skill";
import Footer from "./Component/footer/footer";
// import Routers from "./Component/routers/routers";

function App() {
  return (
    <>
      <div className="App">
        {/* <Routers /> */}
        <Navbar />
        <div>
          <Home />
          <About />
          <Project />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
