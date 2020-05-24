import React from "react";
import './about.styles';
import {
    AboutContainer,
    AboutHeader,
    AboutParagraph,
    AboutSectionOne,
    AboutSectionTwo,
    AboutUs,
    ButtonContainer
} from "./about.styles";
import Button from "../button/button.component";
import {typeScale} from "../../utils";

const About = () => {

    return (
        <AboutContainer>
            <AboutSectionOne>
                <AboutHeader>
                    People behind Design Studios
                </AboutHeader>
                <AboutUs>
                    ABOUT US
                </AboutUs>
                <hr style={{opacity: '0.2', height: '2px'}}/>
                <AboutParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos dolorum id incidunt
                    iusto labore laudantium nam, nemo, nobis quo rem temporibus, tenetur ut. Dolorem dolorum veniam
                    voluptatem. Nisi, vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                    dignissimos dolorum id incidunt
                    iusto

                </AboutParagraph>
                <ButtonContainer>
                    <Button textColor="white" backgroundColor="black" marginLeft="0">Works</Button>
                    <Button textColor="black" backgroundColor={typeScale[100]} marginLeft="30px">Contact</Button>
                </ButtonContainer>
            </AboutSectionOne>
            <AboutSectionTwo/>
        </AboutContainer>
    );
};

export default About;