import React from "react";
import './landing-social-icons.styles';
import {LandingSocialLinks, Social} from "./landing-social-icons.styles";

const LandingSocialIcons = () => {

    return (
        <Social>
            <LandingSocialLinks>
                <i className="fa fa-facebook" aria-hidden="true"/>
            </LandingSocialLinks>
            <LandingSocialLinks>
                <i className="fa fa-instagram" aria-hidden="true"/>
            </LandingSocialLinks>
            <LandingSocialLinks>
                <i className="fa fa-twitter" aria-hidden="true"/>
            </LandingSocialLinks>
            <LandingSocialLinks>
                <i className="fa fa-behance" aria-hidden="true"/>
            </LandingSocialLinks>
        </Social>
    );
};

export default LandingSocialIcons;