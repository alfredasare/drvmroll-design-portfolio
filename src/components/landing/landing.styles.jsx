import styled from "styled-components";
import {typeScale} from "../../utils";

export const HeaderContainer = styled.header`
    height: 100vh;
    
    @media screen and (max-width: 480px) {
      margin-bottom: 5em;
    }
    
    @media screen and (width: 1024px) and (height: 1366px) {
      height: 70vh;
    }
`;

export const MainContent = styled.div`
  padding: 19em 4em 4em 6em;
  font-size: .9em;
  line-height: 1.5em;
  margin-left: 3%;
  
  @media screen and (max-width: 1200px) {
    padding: 15em 4em 4em 8em;
  }
  
  @media screen and (max-width: 480px) {
    padding: 5em 4em 7em 3em;
  }
  
  
 
`;

export const MainContentHeading = styled.h1`
  font-size: 3.0em;
  
  @media screen and (max-width: 480px) {
    line-height: 1.2em;
    font-size: 2.5em;
  }
  
  @media screen and (max-width: 1200px) {
    width: 50%;
    line-height: 1.2em;
  }
`;

export const MainContentParagraph = styled.p`
    font-size: ${typeScale.header2};
    width: 30%;
    margin-left: 5%;
    line-height: 1.2em;
    
    @media screen and (max-width: 480px) {
        margin-left: 0;
        font-size: ${typeScale.header3};
        width: 70%;
    }
`;