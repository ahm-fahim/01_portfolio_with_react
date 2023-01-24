import "./App.css"
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navber from "./components/Navber/Navber";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navber/>
      <Intro />
      <Services />
      <Experience />
      <Works/>
    </div>
  );
}

export default App;
