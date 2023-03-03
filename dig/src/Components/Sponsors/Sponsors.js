import React from "react";
import nasa from "../../assets/nasa.png";
import nsf from "../../assets/nsf.png";
import usf from "../../assets/usf.png";
import cdc from "../../assets/cdc.png";

const NSFcont =
  "NSF's support has helped to fund research and development of the mosquito trap machine, bringing us one step closer to our goal of reducing mosquito-borne illnesses around the world";
const USFcont =
  "USF's research facilities and expertise in environmental science, entomology, and computer science have contributed to the development and refinement of the mosquito trap machine.";
const CDCcont =
  "The CDC's guidance and access to disease data have informed the design and deployment of the mosquito trap machine to help reduce the spread of mosquito-borne illnesses.";
const NASAcont =
  "NASA's technical expertise and funding have supported the development of advanced sensors and algorithms for the mosquito trap machine";

const defaultcont =
  "We are incredibly grateful for the contributions of our sponsors and partners. Thanks to their generous support, we have been able to develop and refine our mosquito trap machine,\n bringing us one step closer to our goal of reducing mosquito-borne illnesses around the world";
const Sponsors = () => {
  const [contribution, setContribution] = React.useState(defaultcont);
  return (
    <>
      <div style={{ marginTop: 190, marginBottom: 80 }}>
        <div style={{ textAlign: "center" }}>
          <h5
            style={{ fontSize: 15, fontWeight: "700" }}
            className="title changecolor"
          >
            Collaborative Efforts
          </h5>
          <br />
          <br />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          <img
            src={nasa}
            alt="NASA logo"
            style={{
              width: 400,
              height: 250,
              margin: 30,
              cursor: "pointer",
              marginRight: 0,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              setContribution(NASAcont);
              e.currentTarget.style.transform = "scale(1.4)";
            }}
            onMouseLeave={(e) => {
              setContribution(defaultcont);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => window.open("https://www.nasa.gov/", "_blank")}
          />
          <img
            src={nsf}
            alt="NSF logo"
            style={{
              width: 280,
              height: 250,
              margin: 30,
              cursor: "pointer",
              marginRight: 50,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              setContribution(NSFcont);
              e.currentTarget.style.transform = "scale(1.4)";
            }}
            onMouseLeave={(e) => {
              setContribution(defaultcont);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => window.open("https://www.nsf.gov/", "_blank")}
          />
          <img
            src={usf}
            alt="USF logo"
            style={{
              width: 270,
              height: 250,
              margin: 30,
              cursor: "pointer",
              marginRight: 80,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              setContribution(USFcont);
              e.currentTarget.style.transform = "scale(1.4)";
            }}
            onMouseLeave={(e) => {
              setContribution(defaultcont);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => window.open("https://www.usf.edu/", "_blank")}
          />
          <img
            src={cdc}
            alt="CDC logo"
            style={{
              width: 280,
              height: 280,
              margin: 30,
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              setContribution(CDCcont);
              e.currentTarget.style.transform = "scale(1.4)";
            }}
            onMouseLeave={(e) => {
              setContribution(defaultcont);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => window.open("https://www.cdc.gov/", "_blank")}
          />
        </div>
        <div
          style={{
            maxWidth: "80%",
            minHeight: 100,
            textAlign: "center",
            margin: "auto",
          }}
        >
          <h5
            className="changeColor"
            // style={{ maxWidth: "80%", textAlign: "center" }}
          >
            {contribution}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
