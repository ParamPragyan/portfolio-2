import "./App.css";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Experience from "./Sections/Experience/Experience";
import Work from "./Sections/Work/Work";
import Contact from "./Sections/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import ContactBar from "./Components/ContactBar/ContactBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <NavBar/>
      <div className="app_section_container">
        <Home />
        <About />
        <Experience/>
        <Work/>
        <Contact/> 
      </div>
      <ContactBar/>
      <Footer/>
    </div>
  );
}

export default App;
