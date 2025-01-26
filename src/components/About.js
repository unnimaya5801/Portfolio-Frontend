import React from 'react';
import './About.css'; // Import custom styles if needed

const About = () => {
  return (
    <div className="about-page py-5">
      <div className="container">
        {/* About Header Section */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            
          </div>
          <div className="col-md-8">
            <h1 className="display-4">About Me</h1>
            <p className="lead">
              I am a graduate in Electronics and Communication Engineering and currently an associate software engineer trainee at Tarento Technologies Pvt Ltd
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="skills py-5">
          <h2 className="text-center mb-4">My Skills</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <i className="fas fa-code fa-3x mb-3 text-primary"></i> {/* Frontend Development Icon */}
                  <h5 className="card-title">Frontend Development</h5>
                  <p className="card-text">HTML, CSS, JavaScript, React</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <i className="fas fa-database fa-3x mb-3 text-primary"></i> {/* Backend Development Icon */}
                  <h5 className="card-title">Backend Development</h5>
                  <p className="card-text">Java Spring Boot, PostgreSQL</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <i className="fas fa-laptop-code fa-3x mb-3 text-primary"></i> {/* Other Skills Icon */}
                  <h5 className="card-title">Other Skills</h5>
                  <p className="card-text">Git</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education py-5 bg-light">
          <h2 className="text-center mb-4">Education</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body text-center">
                  <i className="fas fa-graduation-cap fa-3x mb-3 text-primary"></i> {/* Graduation Icon */}
                  <h5 className="card-title">B Tech</h5>
                  <p className="card-text">
                    <strong>Institution:</strong> Rajiv Gandhi Institute Of Technology <br />
                    <strong>Year:</strong> 2020 - 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
