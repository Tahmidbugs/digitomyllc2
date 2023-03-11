import React, { useState, useEffect } from "react";
import "./About.css";
import Machine from "../../assets/machine.png";
import Machine2 from "../../assets/machine2.jpeg";
import MySVG from "./my.gif";

const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(Machine);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [Machine, Machine2];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "200px",
        }}
        className="bodyPart"
      >
        <div style={{ width: "40%", margin: "auto", textAlign: "center" }}>
          {/* <img
            src={MySVG}
            alt="My GIF"
            style={{ width: "25%", height: "45%", position: "absolute" }}
          /> */}
          <h1 className="title changecolor ">Digitomy, LLC </h1>

          <h3
            className="info fadeIn"
            style={{ marginTop: 30, textAlign: "left" }}
          >
            At Digitomy, we believe in the power of innovation to revolutionize
            the way we approach mosquito surveillance. Based at the University
            of South Florida, our team is dedicated to developing cutting-edge
            technology to automate the surveillance of mosquito vectors at both
            the adult and larval stages.
          </h3>

          <h3
            className="info fadeIn"
            style={{ marginTop: 30, textAlign: "left" }}
          >
            Our patented algorithms and smart mosquito trap are designed to
            provide unparalleled accuracy and efficiency in monitoring the
            presence of mosquitoes, helping to prevent the spread of diseases
            they may carry. Join us in our mission to create a healthier, safer
            world through technology.
          </h3>
          <br />
          <br />
          <Button />
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <video
              style={{
                // borderRadius: 30,
                objectFit: "cover",
                width: "500px",
                height: "600px",
                // transform: hover ? "scale(1.4)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
                opacity: 1,
              }}
              // controls
              autoPlay
              alt=""
              className=" fadeIn video"
              loop
              controls={false}
              muted
            >
              <source
                src={require("../../assets/machine.mov")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

const Button = () => {
  const handleClick = () => {
    const demoSection = document.getElementById("demo");
    const yOffset = -250; // adjust this value to change how far down to scroll
    const y =
      demoSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <a href="#demo" className="glow-on-hover bounce" onClick={handleClick}>
      Check Demo
    </a>
  );
};

export default About;
