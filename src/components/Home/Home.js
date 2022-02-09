import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";import myImg from "../../Assets/Screenshot_20211126-105546_Gallery.jpg";
import Tilt from "react-parallax-tilt";



function Home() {
  return (
    <d>
      <Container fluid className="" id="home"  style={{ backgroundColor: '#181818', height: '100vh'}}>
        <Container className="home-content">
          <Row>
            <Col  className="home-header text-center" >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TOMAS LAUS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left', marginBottom: '15px', marginLeft: '35px' }}>
                <Type />
              </div>
            </Col>

            
            <Col md={4}>
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" width="240" height="240" style={{borderRadius: '150px', marginLeft: '80px'}} />
              </Tilt>
            </Col>

          


          </Row>
        </Container>
      </Container>
      <Home2 />
    </d>
  );
}

export default Home;
