import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/footersProject.css";

function FootersProject() {
  return (
    <footer>
      <p>
        Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 rdpinkst{" "}
        <a href="https://github.com/rdpinkst">
          <FontAwesomeIcon icon={faGithub} style={{color: 'black'}} />
        </a>{" "}
      </p>
    </footer>
  );
}

export default FootersProject;
