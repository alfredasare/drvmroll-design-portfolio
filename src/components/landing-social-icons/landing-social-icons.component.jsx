import React from "react";
import './landing-social-icons.styles';
import {LandingSocialLinks, Social} from "./landing-social-icons.styles";

const LandingSocialIcons = () => {

    return (
        <Social>
            <LandingSocialLinks>
                <i className="fab fa-facebook-f" aria-hidden="true"/>
            </LandingSocialLinks>
            <LandingSocialLinks>
                <i className="fab fa-instagram" aria-hidden="true"/>
            </LandingSocialLinks>
            <LandingSocialLinks>
                <i className="fab fa-twitter" aria-hidden="true"/>
            </LandingSocialLinks>
            <LandingSocialLinks>
                <i className="fab fa-behance" aria-hidden="true"/>
            </LandingSocialLinks>
        </Social>
    );
};

export default LandingSocialIcons;