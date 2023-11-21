// Home.js
import React, { useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import react from "../assets/react.png";
import angular from "../assets/angular.png";
import redux from "../assets/redux.png";
import htm from "../assets/html.png";
import css from "../assets/css.png";
import swift from "../assets/swift.png";
import kotlin from "../assets/kotlin.png";
import ruby from "../assets/ruby.png";
import xd from "../assets/xd.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import c from "../assets/c++.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mySQL.png";
import nodejs from "../assets/nodejs.png";

import js from "../assets/js.png";
import yourPhoto from "../assets/sepi.png"; // Replace with the actual path to your photo

function Home() {
  useEffect(() => {
    const skillsSection = document.querySelector('.skills');
    
    const handleScroll = () => {
      const skillsSectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (skillsSectionTop < windowHeight) {
        document.querySelectorAll('.logo, .logo1').forEach(logo => {
          logo.classList.add('logo-appear');
        });

        // Remove the event listener once the logos have appeared
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="home">
      <div className="about">
      <line>
      &nbsp;&nbsp;&nbsp;
      </line>
      <line>
      &nbsp;&nbsp;&nbsp;
        </line>
        <line>
        &nbsp;&nbsp;&nbsp;
        </line>
        <line>
        &nbsp;&nbsp;&nbsp;
        </line>
        <line>
        &nbsp;&nbsp;&nbsp;
        </line>
        <line>
        &nbsp;&nbsp;&nbsp;
        </line>
        <line>
        &nbsp;&nbsp;&nbsp;
        </line>
        <line>
        &nbsp;&nbsp;&nbsp;
        </line>
        <div className="photo-container">
          <img src={yourPhoto} alt="Your Photo" className="photo" />
        </div>
        <h2> Sepehr Fazely</h2>
        
        <div className="prompt">
          <p>A full stack software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/sepehr-fazely/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:sepifazeli@yahoo.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/sepfazeli" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills" >
        <table className="table">
          <tbody>
            <tr>
              <td>
                <h2>UI/UX design</h2>
                <span className="infinite-scroll">
                  <img src={xd} alt="XD Logo" className="logo" />
                  <img src={figma} alt="Figma Logo" className="logo" />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Front-End and Mobile Development</h2>
                <span className="infinite-scroll">
                  <img src={react} alt="ReactJS Logo" className="logo" />
                  <img src={angular} alt="Angular Logo" className="logo" />
                  <img src={redux} alt="Redux Logo" className="logo" />
                  <img src={htm} alt="HTML Logo" className="logo" />
                  <img src={css} alt="CSS Logo" className="logo" />
                  <img src={swift} alt="Swift Logo" className="logo" />
                  <img src={kotlin} alt="Kotlin Logo" className="logo" />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Back-End</h2>
                <span className="infinite-scroll">
                  <img src={nodejs} alt="Node.js Logo" className="logo" />
                  <img src={ruby} alt="Ruby Logo" className="logo" />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Databases and Cloud Platforms</h2>
                <span className="infinite-scroll">
                  <img src={mysql} alt="MySQL Logo" className="logo1" />
                  <img src={mongodb} alt="MongoDB Logo" className="logo1" />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Languages</h2>
                <span className="infinite-scroll">
                  <img src={python} alt="Python Logo" className="logo" />
                  <img src={c} alt="C++ Logo" className="logo" />
                  <img src={java} alt="Java Logo" className="logo" />
                  <img src={js} alt="JavaScript Logo" className="logo" />
                  <img src={swift} alt="Swift Logo" className="logo" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

