import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contador from "./components/Contador";
import './styles/styles.css'; // Importe o arquivo CSS
import Midia from "./components/Midia";

function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/contador" className="nav-link">Contador</Link>
            </li>
            <li>
              <Link to="/midia" className="nav-link">Midia</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/midia" element={<Midia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
