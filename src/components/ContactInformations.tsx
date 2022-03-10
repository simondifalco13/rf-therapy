import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const css = require('../styles/links.css')
  
const instagtamLink="https://www.instagram.com/rf.therapy/";
const facebookLink="https://www.facebook.com/pages/category/Boutique-Store/RF-Th%C3%A9rapy-105279171005946/";
const ContactInformation = () =>{

    return(
        <div>
            <h3>Suivez nous sur les réseaux  </h3>
            <a href={facebookLink} 
                className="facebook social" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="3x" style={css.facebook} />
            </a>
            <a href={instagtamLink} 
                className="instagram social" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="3x" style={css.instagram} />
            </a>
        </div>
    );
};

export default ContactInformation;