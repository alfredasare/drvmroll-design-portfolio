import React from "react";
import './landing.styles';
import {HeaderContainer, MainContent, MainContentHeading, MainContentParagraph} from "./landing.styles";
import LandingSocialIcons from "../landing-social-icons/landing-social-icons.component";
import LandingMainBg from "../landing-main-bg/landing-main-bg.component";
import LandingLowerSection from "../landing-lower-section/landing-lower-section.component";


const Landing = () => {

    return (
        <HeaderContainer>
            <LandingSocialIcons />
            <LandingMainBg />
            <MainContent>
                <MainContentHeading>
                    We are Design Studios
                </MainContentHeading>
                <MainContentParagraph>
                    We offer award-winning design services at the highest quality
                </MainContentParagraph>
            </MainContent>
            <LandingLowerSection />
        </HeaderContainer>
    );
};

export default Landing;