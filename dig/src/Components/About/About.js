import React, { useState, useEffect } from "react";
import "./About.css";
import Machine from "../../assets/machine.png";
import Machine2 from "../../assets/machine2.jpeg";
import MySVG from "./my.gif";
import { Link, animateScroll } from "react-scroll";

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
          height: "30rem",
        }}
        // className="bodyPart"
      >
        <div
          style={{
            position: "relative",
            width: "70%",
            height: "20rem",
            marginLeft: 20,
            marginRight: 20,
            borderRadius: "20px",
            // overflow: "hidden",
          }}
        >
          <video
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: 1,
              borderRadius: 20,
              borderTopLeftRadius: 70,
              borderTopRightRadius: 70,
            }}
            autoPlay
            alt=""
            className="fadeIn video"
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
          <h1
            className="title2 changecolor"
            style={{
              position: "absolute",
              // marginLeft: "50%",
              // top: "55%",
              // transform: "translateX(-50%)",
              // textAlign: "left",

              // width: "56.25rem",
            }}
          >
            Embrace the <br />
            future of mosquito surveillance <br />
            with Digitomy
          </h1>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button />
        </div>
        <div className="about__me" style={{ width: "30%", flexWrap: "wrap" }}>
          <div className="about__me-image">
            <h3
              className="info fadeIn"
              style={{
                marginTop: 90,
                textAlign: "left",
              }}
            >
              At Digitomy, we believe in the power of innovation to
              revolutionize the way we approach mosquito surveillance. Based at
              the University of South Florida, our team is dedicated to
              developing cutting-edge technology to automate the surveillance of
              mosquito vectors at both the adult and larval stages.
            </h3>

            <h3
              className="info fadeIn"
              style={{ marginTop: 30, textAlign: "left" }}
            >
              Our patented algorithms and smart mosquito trap are designed to
              provide unparalleled accuracy and efficiency in monitoring the
              presence of mosquitoes, helping to prevent the spread of diseases
              they may carry. Join us in our mission to create a healthier,
              safer world through technology.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

const Button = () => {
  return (
    <Link
      to="demo"
      smooth={true}
      duration={500}
      offset={-250}
      style={{ textDecoration: "none" }}
      className="glow-on-hover bounce"
    >
      Check Demo
    </Link>
  );
};

export default About;
