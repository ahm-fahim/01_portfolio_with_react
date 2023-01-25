import "./App.css";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navber from "./components/Navber/Navber";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div
            className="App"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <Navber />
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
