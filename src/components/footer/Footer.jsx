import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                </ul>
                <div className="infoText">
                    KoiKonRegarde est un projet étudiant créé par Antoine Rogé-Picard, 
                    inspiré du projet collectif KoiKonRegarde créé en collectif à l'école Ada Tech School.
                </div>
                
               
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
