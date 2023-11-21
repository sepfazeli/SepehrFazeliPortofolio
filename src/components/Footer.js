import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
   
            {/* Wrap the LinkedInIcon with an anchor tag */}
        <a href="https://www.linkedin.com/in/sepehr-fazely/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          </a>

      </div>
      <p> &copy; sepehr fazely</p>
    </div>
  );
}

export default Footer;