import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/descarga.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              title="Tasty - Food Project"
              description="Development of an App with React, Redux, NodeJS, Express, Testing, Sequelize and PostgreSQL.
              It is possible to perform a specific recipe search and/or filter them by score, alphabetically and by type of diet.
              The customer can create his own recipe, which will be stored in the database and displayed on the main page."
              link="https://github.com/TomasLaus/Project-Food"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="MovieApp"
              description="Development of a SPA (Single Page Application), as an academic experience, using React, and Redux as State management. The components were developed with pure CSS. The SPA consumes data from the OMDB API. You can view and list movies, see all the details of a particular movie, add movies to your favorites list and delete them."
              link="https://github.com/TomasLaus/MovieApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Rick and Morty - App"
              description="Development of an App with React, Redux, NodeJS, Express, Testing, Sequelize and PostgreSQL.
              It is possible to perform a specific character search and/or filter them.
              The customer can create his own persona, which will be stored in the database and displayed on the home page."
              link="https://github.com/TomasLaus/Rick-and-Morty-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
