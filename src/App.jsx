import { NavbarFormExample } from "./components/NavBar";
import "./App.css";
import { Banner } from "./components/Banner";
import Skills from "./components/Skills";
import { ProjectsJoel } from "./components/Projects";
import { Footer } from "./components/Footer";
import {Contact} from "./components/Contact"

function App() {
  return (
    <>
      <div className="app-container">
        <NavbarFormExample />
        <Banner />
        <Skills />
        <ProjectsJoel />
        <Contact /> 
        <Footer />
      </div>
    </>
  );
}

export default App;
