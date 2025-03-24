import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Projects from "./Projects";

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Karan Bhatt's Portfolio</h1>
        <p>Java Developer | Spring Boot Developer | DevOps Enthusiast</p>
      </header>
      
      <section className="about">
        <h2>About Me</h2>
        <p>Dynamic AWS Java Developer with 3 years of experience in building scalable microservices and REST APIs.</p>
      </section>
      
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java, Spring Boot, Quarkus</li>
          <li>ReactJS, Vue.js</li>
          <li>Docker, Kubernetes, OpenShift</li>
          <li>Kafka, ActiveMQ, Keycloak</li>
        </ul>
      </section>
      
      <section className="projects">
        <Projects/>
      </section>
      
      <div className="cta-buttons">
        <Link to="/contact" className="btn">Contact Me</Link>
        {/* <Link to="/game" className="btn">Play My Game</Link> */}
      </div>
    </div>
  );
}
export default Home;