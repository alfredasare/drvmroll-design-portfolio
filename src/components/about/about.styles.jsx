import styled from "styled-components";
import {typeScale} from "../../utils";

export const AboutContainer = styled.section`
  width: 100%;
  padding: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutSectionOne = styled.div`
  width: 100%;
`;

export const AboutSectionTwo = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${require("../../assets/images/bball-unsplash.jpg")});
  background-size: cover;                      
  background-repeat: no-repeat;
  background-position: center center;
`;

export const AboutHeader = styled.h1`
  font-size: 2.5em;
  width: 100%;
`;

export const AboutUs = styled.p`
  font-size: ${typeScale.header4};
  letter-spacing: 0.5em;
`;

export const AboutParagraph = styled.p`
  width: 70%;
  line-height: 1.5em;
  font-size: ${typeScale.paragraph};
  
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;