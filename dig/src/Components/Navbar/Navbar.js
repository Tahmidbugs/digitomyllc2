import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const [logoURL, setlogoURL] = React.useState(
    `${require("../../assets/logo.png")}`
  );
  return (
    <nav
      class="navbar navbar-expand-sm  navbar-dark"
      style={{ backgroundColor: "#DDD9D9" }}
    >
      <div
        class="container-fluid"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a class="navbar-brand" href="#" style={{ marginLeft: 100 }}>
          <img
            src={logoURL}
            onMouseEnter={() =>
              setlogoURL(`${require("../../assets/logo1.png")}`)
            }
            onMouseLeave={() =>
              setlogoURL(`${require("../../assets/logo.png")}`)
            }
            className="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          // class="collapse navbar-collapse"
          id="collapsibleNavbar"
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "black" }}>
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#demo" style={{ color: "black" }}>
                Demo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "black" }}>
                Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "black" }}>
                Patents
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "black" }}>
                Contacts
              </a>
            </li>

            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={{ color: "black" }}
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Link
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another link
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    A third link
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
