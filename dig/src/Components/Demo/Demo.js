import React from "react";

import "./Demo.css";
const Demo = () => {
  const [toRotate, setToRotate] = React.useState([
    { text: "malaria", color: "#5757D4", italize: false },
    { text: "chikungunya", color: "#A4429B", italize: false },
    { text: "Public-Health", color: "#5747AF", italize: false },
    { text: "Zika", color: "#428157", italize: false },
    { text: "AI", color: "#3F5681", italize: false },
    { text: "cloud", color: "#3F5681", italize: false },
    { text: "Culex", color: "#6B1C4F", italize: true },
    { text: "Anopheles", color: "#E7830B", italize: true },
    { text: "stephensi", color: "#15927D", italize: true },
    { text: "Smart-trap", color: "#68873A", italize: false },
    { text: "nigripalpus", color: "#0D6A8F", italize: true },
    { text: "image-processing", color: "#503C59", italize: false },
    { text: "dengue", color: "#763829", italize: false },
    { text: "Aedes", color: "#DD9308", italize: true },
    { text: "computer-vision", color: "#E6C86A", italize: false },
    { text: "aegypti", color: "#0B7E44", italize: true },
  ]);
  const [toRotate3, setToRotate3] = React.useState([]);
  for (let i = 0; i < toRotate.length; i += 6) {
    toRotate3.push(toRotate.slice(i, i + 6));
  }
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [text, setText] = React.useState({
    text: "",
    color: "",
    italize: false,
  });
  const [delta, setDelta] = React.useState(50);
  const shuffleToRotate = () => {
    const shuffled = toRotate.sort(() => Math.random() - 0.5);
    console.log("meow");
    const shuffledChunks = [];
    for (let i = 0; i < shuffled.length; i += 6) {
      shuffledChunks.push(shuffled.slice(i, i + 6));
    }
    setToRotate3(shuffledChunks);
    setLoopNum(0);
    setIsDeleting(false);
  };

  React.useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate.map((r) => r.text).join(" ");

      if (isDeleting) {
        setText({
          text: fullText.substring(0, text.text.length - 1),
          color: text.color,
          italize: text.italize,
        });
      } else {
        setText({
          text: fullText.substring(0, text.text.length + 1),
          color: toRotate[0].color,
          italize: toRotate[0].italize,
        });
      }

      setDelta(150 - Math.random() * 100);

      if (isDeleting && text.text === "") {
        setIsDeleting(false);
        setLoopNum(i + 1);
        shuffleToRotate();
      } else if (!isDeleting && text.text === fullText) {
        setIsDeleting(true);
        setDelta(1000);
      }
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [loopNum, isDeleting, delta, toRotate]);

  return (
    <>
      <div style={{ marginTop: 150, height: "400px" }} id="demo">
        <h5
          style={{ fontSize: 14, fontWeight: 800 }}
          className="title changecolor"
        >
          Demo
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 100,
            marginBottom: 200,
          }}
        >
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              width: "55%",
              height: "50%",
              flexWrap: "wrap",
            }}
          >
            {text.text === "" ? (
              <h1 className="">s</h1>
            ) : (
              <h1 className="typingText">
                {text.text.split(" ").map((word, index) => {
                  return (
                    <span
                      key={index}
                      style={{
                        color: toRotate[index].color,
                        fontStyle: toRotate[index].italize
                          ? "italic"
                          : "normal",
                      }}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
                <span
                  style={{
                    background: "#474747",
                    height: "50px",
                    width: "8px",
                    display: "inline-block",
                    position: "relative",

                    left: `${(100 * 0) / text.text.length}%`,
                    animation: "blink 1s step-end infinite",
                  }}
                />
              </h1>
            )}
          </div>

          <div
            style={{
              margin: "auto",
              textAlign: "center",
              width: "50rem",
              display: "flex",
              justifyContent: "center",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <video
              style={{
                borderRadius: 30,
                width: "70%",
                transform: hover ? "scale(1.4)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
              }}
              controls
              autoPlay
              className="video"
            >
              <source src={require("../../assets/demo.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
