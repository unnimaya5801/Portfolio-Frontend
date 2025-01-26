import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';


const Projects = () => {
  const projects = [
    { id: 1, title: "Sign Language To Speech Converter", image: "https://jpralves.net/img/2023/08/PM435_GestovoiceGestureToVoiceConver.jpg" },
    { id: 2, title: "Surveillance Spy Robot", image: "https://image.dfrobot.com/image//Blog/DFRobot%20Devastator%20Tank%20Robot%20Part%202%20Raspberry%20Pi%20Python%20Code/DFRobot-Devastator-Tank-Treaded-Tracked-Robot-with-Raspberry-Pi-and-Rangefinder-Side-View-1024x859.jpg" },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <div className="row mt-4">
          {projects.map((project) => (
            <div className="col-md-5 mb-5" key={project.id}>
              <div className="card h-100">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  {/* Link to ProjectDetail page with the project ID */}
                  <Link to={`/projects/${project.id}`} className="btn btn-primary">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



