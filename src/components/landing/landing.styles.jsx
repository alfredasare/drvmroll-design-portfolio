import styled from "styled-components";
import {typeScale} from "../../utils";

export const HeaderContainer = styled.header`
    //height: 100vh;
    margin-bottom: 5em;
    
    @media screen and (max-width: 360px) {
        height: 70vh;
      }
      
    @media screen and (min-width: 360px) and (max-width: 550px) {
      margin-bottom: 0;
      height: 90vh;
    }
    
    //ipad pro
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
      height: 70vh;
    }
    
    @media screen and (min-width: 1201px){
        height: 100vh;
      }
    
    @media screen and (min-width: 1400px) {
      margin-bottom: 7em;
      height: 100vh;
    }
    
`;

export const MainContent = styled.div`
  padding: 5em 4em 4em 8em;
  font-size: .9em;
  line-height: 1.5em;
  margin-left: 3%;
  
  @media screen and (max-width: 360px) {
    padding: 5em 4em 0 3em;
  }
  
  @media screen and (min-width: 360px) and (max-width: 550px) {
    padding: 5em 4em 7em 3em;
  }
  
  @media screen and (min-width: 551px) and (max-width: 1200px) {
    padding: 5em 4em 4em 8em;
  }
  
  //ipad pro
  @media only screen 
  and (min-width: 1024px) 
  and (max-height: 1366px) 
  and (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 20em 4em 4em 8em;
  }
  
  @media screen and (min-width: 1201px){
    padding: 5em 4em 4em 8em;
  }
  
  @media screen and (min-width: 1400px){
    padding: 15em 4em 4em 8em;
  }
 
`;

export const MainContentHeading = styled.h1`
  font-size: 2.5em;
  
  @media screen and (max-width: 480px) {
    line-height: 1.2em;
    font-size: 2em;
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
