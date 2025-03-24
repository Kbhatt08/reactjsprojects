import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Migration: Camel Fuse to Quarkus Cloud Architecture",
    technologies: "Quarkus, Kubernetes, OpenShift",
    description: "Re-architected services for cloud environments, reducing downtime and enhancing scalability."
  },
  {
    title: "e-NACH Implementation for Transactions",
    technologies: "Kogito, PostgreSQL, REST APIs",
    description: "Automated file-based workflows, improving processing efficiency and reducing errors."
  },
  {
    title: "Partner Transactions Module",
    technologies: "Java, Spring Boot, MySQL",
    description: "Enhanced transaction processing speed through adaptive data mapping solutions."
  },
  {
    title: "Scholarship Distribution Web Application",
    technologies: "Vue.js, Quarkus, Camel, Jenkins",
    description: "Streamlined application processing for government scholarships, reducing approval times."
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;