import React from "react";
import ryanb from "../../assets/ryanb.png";
import ryan from "../../assets/ryan.png";

import sriramb from "../../assets/sriramb.png";
import sriram from "../../assets/sriram.png";

import brandonb from "../../assets/brandonb.png";
import brandon from "../../assets/brandon.png";

import abrorb from "../../assets/abrorb.png";
import abror from "../../assets/abror.png";

import tanvirb from "../../assets/tanvirb.png";
import tanvir from "../../assets/tanvir.png";

import farhat from "../../assets/farhat.png";
import farhatb from "../../assets/farhatb.png";

import otabek from "../../assets/otabek.png";
import otabekb from "../../assets/otabekb.png";

import tahmid from "../../assets/tahmid.jpeg";
import tahmidb from "../../assets/tahmidb.jpeg";

import ramya from "../../assets/ramya.jpg";
import ramyab from "../../assets/ramyab.jpg";

const Team = () => {
  const members = [
    {
      name: "Sriram Chellappan",
      position: "Faculty at USF",
      positionDescription:
        "Professor in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: sriram,
      profilePicture2: sriramb,
      portfolio: "https://www.linkedin.com/in/sriram-chellappan-20bb8051/",
    },
    {
      name: "Ryan Carney",
      position: "Faculty at USF",
      positionDescription:
        "Assistant Professor of Digital Science at the University of South Florida.",
      profilePicture: ryan,
      profilePicture2: ryanb,
      portfolio: "https://www.linkedin.com/in/ryancarney/",
    },
    {
      name: "Ramya Thiagarjan",
      position: "Faculty at USF",
      positionDescription:
        "Sr. Statistical Data Analyst at the University of South Florida.",
      profilePicture: ramya,
      profilePicture2: ramyab,
      portfolio: "https://www.linkedin.com/in/ramya-thiagarajan-42600b9/",
    },
    {
      name: "Brandon Wolfram",
      position: "Hardware Design Engineer",
      positionDescription:
        "Hardware Design Engineer and a USF Alum. He is currently pursuing a graduate degree from Georgia-Tech.",
      profilePicture: brandon,
      profilePicture2: brandonb,
      portfolio: "https://www.linkedin.com/in/brandonmwolfram/",
    },
    {
      name: "Abror Khaytaybaev",
      position: "Graduate student at USF",
      positionDescription:
        "Studying in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: abror,
      profilePicture2: abrorb,
      portfolio: "https://www.linkedin.com/in/abror-khaytbaev/",
    },
    {
      name: "Tanvir Hossain Bhuiyan",
      position: "Graduate student at USF",
      positionDescription:
        "Studying in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: tanvir,
      profilePicture2: tanvirb,
      portfolio: "https://www.linkedin.com/in/tanvirrazin/",
    },
    {
      name: "Farhat Binte Azam",
      position: "Graduate student at USF",
      positionDescription:
        "Studying in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: farhat,
      profilePicture2: farhatb,
      portfolio: "https://www.linkedin.com/in/farhat-binte-azam-4415a9144/",
    },
    {
      name: "Otabek Abduraufov",
      position: "Undergraduate student at USF",
      positionDescription:
        "Studying in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: otabek,
      profilePicture2: otabekb,
      portfolio: "https://www.linkedin.com/in/abduraufov/",
    },
    {
      name: "Tahmid Ahmed",
      position: "Undergraduate student at USF",
      positionDescription:
        "Studying in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: tahmid,
      profilePicture2: tahmidb,
      portfolio: "https://www.linkedin.com/in/tahmid-ahmed-72a883212/",
    },
  ];
  return (
    <div
      style={{
        marginTop: 150,
        marginBottom: 100,
      }}
      id="team"
    >
      <h5
        style={{ textAlign: "center", marginBottom: 50, fontSize: 14 }}
        className="title changecolor"
      >
        Meet our team
      </h5>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {members.map((member, index) => (
          <Card
            key={member.name}
            name={member.name}
            position={member.position}
            positionDescription={member.positionDescription}
            profilePicture={member.profilePicture}
            index={index}
            portfolio={member.portfolio}
            profilePicture2={member.profilePicture2}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
const Card = ({
  name,
  position,
  positionDescription,
  profilePicture,
  profilePicture2,
  index,
  portfolio,
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: hover ? "#C3E0F6" : "#F4F4F4",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: "10px",
        padding: "30px",
        paddingTop: 0,
        borderRadius: "20px",
        transition: "all 0.3s ease-in-out",
        animation: ` slideIn  ${index + 1 * 0.8}s ease-in-out `,
        boxShadow: hover ? "0 0 10px #fff" : "0 0 5px #333",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => (window.location.href = portfolio)}
    >
      <div style={{ height: "33%", marginBottom: 30 }}>
        <div
          style={{
            backgroundColor: "#374E61",
            paddingTop: 20,
            borderBottomLeftRadius: "40%",
            borderBottomRightRadius: "40%",
            // justifyContent: "flex-end",
            // display: "flex",
            // flexDirection: "row",
            transition: "background-color 0.5s ease",
          }}
        >
          <img
            src={hover ? profilePicture : profilePicture2}
            alt={name}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              borderBottomLeftRadius: "40%",
              borderBottomRightRadius: "40%",
              marginBottom: "0px",
              transition: "transform 0.2s ease-in-out",
              transform: hover ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>
      </div>
      <div style={{ height: "33%" }}>
        <h5
          style={{
            color: hover ? "black" : "black",
            fontFamily: "Righteous",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
          className="changecolor"
        >
          {name}
        </h5>
        <h5
          style={{
            color: hover ? "black" : "black",
            fontFamily: "Righteous",
            marginBottom: "0.5rem",
          }}
        >
          {position}
        </h5>
      </div>
      <div style={{ height: "33%" }}>
        <h4
          style={{
            color: hover ? "black" : "black",
            textAlign: "center",
            fontSize: 15,
            paddingRight: 20,
          }}
        >
          {positionDescription}
        </h4>
      </div>
    </div>
  );
};
