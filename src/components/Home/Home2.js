import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
    I have a passion for technology and enjoy creating innovative digital experiences!
    <br />
    <br />I am skilled in languages like
    <i>
      <b className="purple"> Python, JavaScript, and SQL. </b>
    </i>
    <br />
    <br />
    My fields of interest include developing engaging{" "}
    <i>
      <b className="purple">Web Applications</b> and diving into{" "}
      <b className="purple">Cloud Computing</b> and{" "}
      <b className="purple">Data Science.</b>
    </i>
    <br />
    <br />
    I’m also passionate about working with <b className="purple">React.js</b> and{" "}
    <i>
      <b className="purple">Next.js</b>
    </i> for building modern, dynamic web apps.
  </p>
</Col>
<Col md={4} className="myAvtar">
  <Tilt>
    <img src={myImg} className="img-fluid" alt="avatar" />
  </Tilt>
</Col>
</Row>
<Row>
  <Col md={12} className="home-about-social">
    <h1>FIND ME ON</h1>
    <p>
      Feel free to <span className="purple">connect </span>with me
    </p>
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/Muhammad00Ahmed"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://twitter.com/yourTwitterHandle" // Replace with your Twitter handle
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiOutlineTwitter />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/muhammad---ahmed/" // Update LinkedIn link
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="#" // Replace with your Instagram handle
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
