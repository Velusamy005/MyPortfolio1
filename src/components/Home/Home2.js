import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Myimg.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am currently pursuing my Bachelor of Engineering degree in Computer Science Engineering 
            in Government College of Engineering Tirunelveli from Anna University and am in my final year.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> java, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new ;
              <i>
                <b className="purple">Web Technologies and Products </b>  
              </i>
              <br />
              <br />
              I have a strong foundation in programming and web development, with skills in JavaScript, React.js, and Node.js. 
              I am also proficient in problem-solving and algorithms.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
  <img src={myImg} style={{ width: "100%", height: "auto" }} />
</Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p> <span className="purple"> </span>THIS
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Velusamy005"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="/velu-samy-a-159c"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/velu_saravanapava"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
