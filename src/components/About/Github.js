import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: 'rgba(240, 6, 6, 0.8)',
    grade3: 'rgba(209, 42, 42, 0.8)',
    grade2: 'rgba(175, 56, 56, 0.8)',
    grade1: 'rgba(128, 64, 64, 0.8)',
    grade0: 'rgba(172, 136, 136, 0.8)',
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="red">Code</strong>
      </h1>
      <GitHubCalendar
        username="TomasLaus"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
