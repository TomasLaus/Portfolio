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
              description="Desarrollo de una App como experiencia académica con React, Redux, NodeJS, Express, Testing, Sequelize y PostgreSQL.
              Se puede realizar una búsqueda especifica de receta y/o filtrarlos por puntaje, alfabéticamente y por tipo de dieta.
              El cliente puede crear su propia receta, que será almacenada en la base de datos y mostrada en la pagina principal."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="MovieApp"
              description="Desarrollo de una SPA (Single Page Aplication), como experiencia académica, utilizando React, y Redux como State management. Los componentes fueron desarrollados con CSS puro. La SPA consume datos de la API de OMDB. Puedes ver y listar películas, ver todos los detalles de una película en particular, agregar las películas a tu lista de favoritos y borrarlas."
              link="https://github.com/TomasLaus/MovieApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flex - E-Commerce"
              description="Desarrollo del front end de una tienda online con carrito de compras, utilizando los componentes React y Firebase como servidor en la nube. Con experiencia de usuario amigable, con actualizaciones visuales instantáneas, y código escalable."
              link="https://github.com/TomasLaus/flex-react"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
