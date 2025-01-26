import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail'; // Import ProjectDetail component
import './App.css'; // Import custom CSS

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Home Route */}
          <Route 
            path="/" 
            element={
              <div className="hero">
                <div className="container text-center">
                  <h3>Welcome to My Portfolio</h3>
                  <h4>I'm Unnimaya</h4>
                </div>
              </div>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Route for Project Details */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
