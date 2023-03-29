import React, {useState} from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatIcon from "@mui/icons-material/Chat";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@mui/material/Zoom";
import {NavLink, useNavigate} from "react-router-dom";
import * as Scroll from "react-scroll";
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

function Header() {
  const navigate = useNavigate();
  const resumeDownload = () => {
    // using Java Script method to get PDF file
    fetch("harsh_sharma_cv.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
      navigate(-1);
    });
  };
  return (
    <div className="header">
      <div>
        <ul className="header__links">
          <li>
            <Tooltip title="Home" placement="right" TransitionComponent={Zoom}>
              <NavLink
                activeClassName={"active"}
                to="/"
                className="header__navLink"
              >
                <HomeIcon className="header__icon" />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="About Me!"
              placement="right"
              TransitionComponent={Zoom}
            >
              <NavLink
                activeClassName={"active"}
                to="/about-me"
                className="header__navLink"
              >
                <PersonIcon className="header__icon" />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Projects" placement="right">
              <NavLink
                to="/projects"
                activeClassName={"active"}
                className="header__navLink"
              >
                <CodeIcon className="header__icon" />
              </NavLink>
            </Tooltip>
          </li>

          <li>
            <Tooltip
              title="Contact Me!"
              placement="right"
              TransitionComponent={Zoom}
            >
              <NavLink
                to="/contactme"
                activeClassName={"active"}
                className="header__navLink"
              >
                <ChatIcon className="header__icon" />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <NavLink
              to="/resume"
              activeClassName={"active"}
              className="header__navLink"
            >
              <Tooltip title="Resume" placement="right">
                <AttachFileIcon
                  className="header__icon"
                  onClick={resumeDownload}
                />
              </Tooltip>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
