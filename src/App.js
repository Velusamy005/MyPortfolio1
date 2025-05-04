import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Resume from "./components/Resume/ResumeNew";
import Projects from "./components/Projects/Projects";

function App() {

  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
