import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import gameroom from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import food from "../../Assets/Projects/descarga.png";

function Projects() {
  return (
    <Container fluid className="project-section"  style={{ backgroundColor: '#181818'}}>
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
              imgPath={food}
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
              imgPath={gameroom}
              title="GAMEROOM - Game app"
              description="Development of an App with React, Redux, NodeJS, Express, Testing, Sequelize and PostgreSQL.
              It is possible to perform a specific videogame search or filter them by his rating, alphabetically and by genre.
              The user can post his own videogame, which will be stored in the database and displayed on the main page."
              link="https://github.com/TomasLaus/Gameroom-VideogamesApp"
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
