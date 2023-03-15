import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [logoURL, setlogoURL] = React.useState(
    `${require("../../assets/logo.gif")}`
  );
  return (
    <div style={{ position: "sticky", zIndex: 1 }}>
      <nav
        class="navbar navbar-expand-sm fixed-top "
        style={{ backgroundColor: "#F4F4F4" }}
      >
        <div
          class="container-fluid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            // class="collapse navbar-collapse"
            id="collapsibleNavbar"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-around",
              minWidth: "40%",
            }}
          >
            <ul class="navbar-nav changecolor">
              <li class="nav-item">
                <a
                  class="nav-link menuitem changecolor"
                  href="#"
                  style={{ color: "black" }}
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <Link
                  to="demo"
                  smooth={true}
                  duration={500}
                  offset={-250}
                  style={{ textDecoration: "none" }}
                  class="nav-link menuitem changecolor"
                >
                  Demo
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="team"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  style={{ textDecoration: "none" }}
                  class="nav-link menuitem changecolor"
                >
                  Team
                </Link>
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
          <a class="navbar-brand" href="#" style={{ marginLeft: 10 }}>
            <img
              src={logoURL}
              // onMouseEnter={() =>
              //   setlogoURL(`${require("../../assets/logo1.png")}`)
              // }
              // onMouseLeave={() =>
              //   setlogoURL(`${require("../../assets/logo.png")}`)
              // }
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
              minWidth: "40%",
            }}
          >
            <ul class="navbar-nav changecolor">
              <li class="nav-item">
                <Link
                  to="sponsors"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  style={{ textDecoration: "none" }}
                  class="nav-link menuitem changecolor"
                >
                  Sponsors
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="patents"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  style={{ textDecoration: "none" }}
                  class="nav-link menuitem changecolor"
                >
                  Patents
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  style={{ textDecoration: "none" }}
                  class="nav-link menuitem changecolor"
                >
                  Contacts
                </Link>
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
    </div>
  );
};

export default Navbar;
