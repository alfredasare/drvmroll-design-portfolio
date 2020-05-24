import styled from "styled-components";
import {typeScale} from "../../utils";

export const HeaderContainer = styled.header`
    height: 100vh;
`;

export const MainContent = styled.div`
  padding: 19em 4em 7em 6em;
  font-size: .9em;
  line-height: 1.5em;
  margin-left: 3%;

 
`;

export const MainContentHeading = styled.h1`
  font-size: 3.0em;
`;

export const MainContentParagraph = styled.p`
  font-size: ${typeScale.header2};
  width: 30%;
  margin-left: 5%;
  line-height: 1.2em;
`;