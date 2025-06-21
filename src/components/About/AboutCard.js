import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
<Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Muhammad Ahmed Rangila</span>
        from <span className="purple">Karachi, Pakistan.</span>
        <br />
        I am a passionate <span className="purple">Data Scientist</span>, 
        <span className="purple"> Software Engineer</span>, 
        <span className="purple">Graphic Designer</span>, and 
        <span className="purple">Cloud Computing Enthusiast</span>.
        <br />
        <br />
        When I’m not building digital experiences, you’ll find me immersed in other pursuits that keep my creativity alive!
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Exploring New Tech Trends
        </li>
        <li className="about-activity">
          <ImPointRight /> Cooking Unique Dishes
        </li>
        <li className="about-activity">
          <ImPointRight /> Playing the Guitar 🎸
        </li>
        <li className="about-activity">
          <ImPointRight /> Traveling and Discovering New Cultures
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Inspiring the future, one code at a time!"{" "}
      </p>
      <footer className="blockquote-footer">Muhammad Ahmed</footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AboutCard;
