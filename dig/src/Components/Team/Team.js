import React from "react";
import ryan from "../../assets/ryan.png";
import sriram from "../../assets/sriram.png";
import brandon from "../../assets/brandon.png";
const Team = () => {
  const members = [
    {
      name: "Sriram Chellappan",
      position: "Faculty at USF",
      positionDescription:
        "Professor in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: sriram,
    },
    {
      name: "Ryan Carney",
      position: "Faculty at USF",
      positionDescription:
        "Assistant Professor of Digital Science at the University of South Florida.",
      profilePicture: ryan,
    },
    {
      name: "Brandon Wolfram",
      position: "Hardware Design Engineer",
      positionDescription:
        "Hardware Design Engineer and a USF Alum. He is currently pursuing a graduate degree from Georgia-Tech.",
      profilePicture: brandon,
    },
  ];
  return (
    <div
      style={{
        marginTop: 150,
        marginBottom: 100,
      }}
    >
      <h5
        style={{ textAlign: "center", marginBottom: 80, fontSize: 14 }}
        className="title"
      >
        Meet our talented team
      </h5>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {members.map((member, index) => (
          <Card
            key={member.name}
            name={member.name}
            position={member.position}
            positionDescription={member.positionDescription}
            profilePicture={member.profilePicture}
            index={index}
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
  index,
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: hover ? "#464646" : "#DCDBDC",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: "1rem",
        padding: "2rem",
        borderRadius: "1rem",
        transition: "all 0.3s ease-in-out",
        animation: ` slideIn  ${index + 1 * 0.8}s ease-in-out `,
        boxShadow: hover ? "0 0 10px #fff" : "0 0 5px #333",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={profilePicture}
        alt={name}
        style={{
          width: "6rem",
          height: "6rem",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
      />
      <h4
        style={{
          color: hover ? "#C9C9C9" : "black",

          marginBottom: "0.5rem",
        }}
      >
        {name}
      </h4>
      <h5
        style={{
          color: hover ? "#C9C9C9" : "black",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        {position}
      </h5>
      <h4
        style={{
          color: hover ? "#C9C9C9" : "black",
          textAlign: "center",
          fontSize: 15,
          paddingRight: 20,
        }}
      >
        {positionDescription}
      </h4>
    </div>
  );
};
