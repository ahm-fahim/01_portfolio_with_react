import "./App.css"
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navber from "./components/Navber/Navber";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navber/>
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio/>
      
    </div>
  );
}

export default App;
