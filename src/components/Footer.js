import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        <p>
          Copyright &#169; 2022 <a href="#">HS</a>
        </p>
        <p>
          Made with 💖 by <a href="#">Harsh Sharma</a>
        </p>
        <p>
          <a href="#">
            {" "}
            <GitHubIcon fontSize="small" />
          </a>
          <a href="#">
            {" "}
            <LinkedInIcon fontSize="small" />
          </a>
          <a href="#">
            {" "}
            <TwitterIcon fontSize="small" />
          </a>
          <a href="#">
            {" "}
            <InstagramIcon fontSize="small" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
