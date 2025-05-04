import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import leaf from "../../Assets/Projects/stud.jpeg";
import emotion from "../../Assets/Projects/cal.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/webpage.png";
import bitsOfCode from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Nexcent Web Pages"
              description=" Created a responsive web page for Nexcent using React.js. The web
                  page showcases modern design principles and interactive elements,
                  ensuring seamless user experience across devices."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="Built a personal portfolio website using React.js. The portfolio
                  includes sections for showcasing skills, projects, and contact
                  details, implemented with reusable components and state
                  management."
            
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Power Bi"
              description=" Developed an interactive dashboard in Power BI to analyze bakery
                  sales data. The dashboard provides insights into daily, weekly,
                  and monthly sales trends and customer preferences."
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Students Management System"
              description=" Designed and implemented a web application using Python and Flask
                  for backend development. The system supports CRUD operations for
                  managing student data efficiently."
           
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Calculator"
              description="Created a functional calculator using HTML, CSS, and JavaScript.
                  The calculator performs basic arithmetic operations and features
                  a clean, user-friendly interface."
            
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
