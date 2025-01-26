import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';


const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  console.log("Project ID from URL:", id); // Check if the id is correct

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the project description from the backend
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/projects/${id}`)
      .then((response) => {
        setDescription(response.data.description); // Assuming backend returns only the description
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setError("An error occurred while fetching project details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="project-detail" className="py-5">
      <div className="container">
        <h2 className="text-center">Project Details</h2>
        <p>{description}</p> {/* Display the project description */}
                {/* Back to Projects button */}
        <button 
          onClick={() => window.history.back()} 
          className="btn btn-secondary mt-4"
        >
          Back to Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectDetail;
