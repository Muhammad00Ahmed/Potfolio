import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";  // ✅ Fixed path

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
              title="Neer Drop"
              description="Neer Drop is a water-based brand marketing agency designed to help businesses make a splash in the market. Inspired by the idea of clean, bold impact like a drop of water, Neer Drop specializes in creative ad campaigns, branded merchandise, and guerrilla marketing that leave a lasting impression."
              ghLink="https://github.com/MuhammadAhmed4419/Chatify"
              demoLink="https://roaring-starburst-da29f7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Meta Store.Ai"
              description="Meta Store.AI is an AI-powered website builder that helps you launch ecommerce stores in minutes—just like Shopify, but smarter. It uses intelligent templates and automation to generate fully functional online shops tailored to your niche, products, and branding—no coding required."
              ghLink="https://github.com/MuhammadAhmed4419/Bits-0f-C0de"
              demoLink="https://stalwart-starlight-96adb1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PixForge AI"
              description="PixForge AI is a powerful image and video editing suite built for creators. It offers AI-enhanced tools for editing, enhancing, and transforming media with ease. From background removal and color grading to smart filters and real-time previews, PixForge AI empowers users to produce studio-quality content in the browser.
"
              ghLink="https://github.com/MuhammadAhmed4419/Editor.io"
              demoLink="https://imaginative-jalebi-967878.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
