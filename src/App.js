import "./App.css"
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navber from "./components/Navber/Navber";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navber/>
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
