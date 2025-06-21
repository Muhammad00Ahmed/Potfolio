import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "Software Engineer",
          "Cloud Computing Enthusiast",
          "AI Engineer",
          "MERN Stack Developer",
          "Graphic Designer",
          "Open Source Contributor",
        ],
        
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
