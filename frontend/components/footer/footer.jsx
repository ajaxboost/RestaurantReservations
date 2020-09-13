import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {


  return (
    <footer id="footer">
      <p>Mahmud Ahmed</p>
      <div className="footer-icons-container">
        <div>
          <a
            style={{ display: "table-cell" }}
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="white"
              className="footer-icon"
            />
          </a>
        </div>
        <div>
          <a
            style={{ display: "table-cell" }}
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              className="footer-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}