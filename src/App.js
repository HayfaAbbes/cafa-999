import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Concept from "./Components/Concept";
import Cuisine from "./Components/Cuisine";
import TheTeam from "./Components/TheTeam";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/the-team" element={<TheTeam />} />    
          <Route path="/menu" element={<Menu/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
