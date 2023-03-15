import React from "react";
import { TbLicense } from "react-icons/tb";

const Patents = () => {
  const pats = [
    {
      title: "US Patent 10,963,742",
      description:
        "Sriram Chellappan, Pratool Bharti, Mona Minakshi, Willie McClinton and Jamshidbek Mirzakhalov, “Leveraging smart-phone cameras and image processing techniques to classify mosquito genus and species”",
    },
    {
      title: "US Patent 11,048,928",
      description:
        "Sriram Chellappan, Mona Minakshi, Jamshidbek Mirzakhalov, Sherzod Kariev and Willie McClinton, “Systems and methods of entomology classification based on extracted anatomies”",
    },
    {
      title: "Application US17/496,563 (Pending)",
      description:
        "Sriram Chellappan, Stephen Edward Saddow, Ryan Marc Carney, Brandon Wolfram and Mark Weston, “Smart mosquito trap for mosquito classification”",
    },
  ];
  return (
    <>
      <div style={{ marginTop: 150, marginBottom: 80 }} id="patents">
        <div style={{ textAlign: "center" }}>
          <h5
            style={{ fontSize: 14, fontWeight: 800 }}
            className="title changecolor"
          >
            Patented Creations
          </h5>
          <br />
          <br />

          <h3
            style={{
              fontSize: 30,

              fontFamily: "Marck Script",
              paddingLeft: "20%",
              paddingRight: "20%",
            }}
          >
            "Our patented algorithms and patent pending smart mosquito trap will
            revolutionize surveillance of vector mosquitoes via automation.""
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {pats.map((item, index) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Patents;

const Card = ({ title, description, index }) => {
  const [hover, setHover] = React.useState(false);
  console.log(title, index);
  return (
    <div
      style={{
        backgroundColor: hover ? "#C3E0F6" : "#DCDBDC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: 10,
        width: "32%",
        padding: 20,
        animation: ` fadeInSwipeUp ${index + 1 * 0.8}s ease-in-out forwards`,

        borderRadius: 20,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          backgroundColor: hover ? "black" : "black",
          width: "70px",
          height: "70px",
          display: "flex",
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <TbLicense
          style={{ color: `${hover ? "#C9C9C9" : "#C9C9C9"}` }}
          size={45}
        />
      </div>
      <h5
        style={{
          color: hover ? "black" : "black",
          fontWeight: "700",
          transition: "all 0.3s ease-in-out",
          transform: hover ? "translateY(-10px)" : "translateY(0)",
        }}
      >
        {title}
      </h5>
      <p
        style={{
          color: hover ? "black" : "black",
          fontWeight: "500",
          fontSize: 15,
          paddingRight: 20,
          transition: "all 0.3s ease-in-out",
          transform: hover ? "translateY(-10px)" : "translateY(0)",
        }}
      >
        {description}
      </p>
    </div>
  );
};
