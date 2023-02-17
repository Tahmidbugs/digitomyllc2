import React from "react";
import "./About.css";
import Machine from "../../assets/machine.png";
const About = () => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  console.log("rerednered");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "150px",
        }}
        className="bodyPart"
      >
        <div style={{ width: "40%", margin: "auto", textAlign: "center" }}>
          <h1 className="title ">Digitomy, LLC </h1>

          <h3 className="info fadeIn" style={{ marginTop: 30 }}>
            At Digitomy, we believe in the power of innovation to revolutionize
            the way we approach mosquito surveillance. Based at the University
            of South Florida, our team is dedicated to developing cutting-edge
            technology to automate the surveillance of mosquito vectors at both
            the adult and larval stages.
          </h3>

          <h3 className="info fadeIn" style={{ marginTop: 30 }}>
            Our patented algorithms and smart mosquito trap are designed to
            provide unparalleled accuracy and efficiency in monitoring the
            presence of mosquitoes, helping to prevent the spread of diseases
            they may carry. Join us in our mission to create a healthier, safer
            world through technology.
          </h3>
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={Machine} alt="" className="pfpi fadeIn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
