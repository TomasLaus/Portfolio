import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="red">Tomás Laus </span>
            from <span className="red"> Argentina.</span>
            <br />Full Stack developer with the ability to develop web projects always keeping in mind that they are scalable so we can build as a team.
            A curious developer, very perseverant, with great problem solving skills and above all a developer always willing to teach and learn from others.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exercising
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
