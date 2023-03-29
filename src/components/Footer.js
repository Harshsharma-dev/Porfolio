import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

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
          <a href="https://github.com/Harshsharma-dev/" target="_blank">
            {" "}
            <GitHubIcon fontSize="small" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-sharma-23405a1a7/"
            target="_blank"
          >
            {" "}
            <LinkedInIcon fontSize="small" />
          </a>
          <a href="https://twitter.com/HS__sharma/" target="_blank">
            {" "}
            <TwitterIcon fontSize="small" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
