import React, {useState} from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatIcon from "@mui/icons-material/Chat";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@mui/material/Zoom";
import {NavLink, Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <ul className="header__links">
          <li>
            <Tooltip title="Home" placement="right" TransitionComponent={Zoom}>
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? "grey" : "blue",
                })}
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
                to="/about-me"
                style={(isActive) => ({
                  color: isActive ? "grey" : "blue",
                })}
              >
                <PersonIcon className="header__icon" />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Projects" placement="right">
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? "grey" : "blue",
                })}
              >
                <CodeIcon className="header__icon" />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Resume" placement="right">
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? "grey" : "blue",
                })}
              >
                <AttachFileIcon className="header__icon" />
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
                to="/"
                style={(isActive) => ({
                  color: isActive ? "grey" : "blue",
                })}
              >
                <ChatIcon className="header__icon" />
              </NavLink>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
