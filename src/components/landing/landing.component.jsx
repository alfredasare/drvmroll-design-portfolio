import React from "react";
import './landing.styles';
import {HeaderContainer} from "./landing.styles";
import LandingSocialIcons from "../landing-social-icons/landing-social-icons.component";

const Landing = () => {

    return (
        <HeaderContainer>
            <LandingSocialIcons />
        </HeaderContainer>
    );
};

export default Landing;