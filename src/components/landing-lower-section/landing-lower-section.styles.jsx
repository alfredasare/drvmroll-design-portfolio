import styled, {css} from "styled-components";
import {portlandOrange, typeScale} from "../../utils";
import {Link} from "react-router-dom";

export const LandingFooter = styled.section`
  width: 80%;
  background: #23383B;
  display: flex;
  height: 200px;
  position: relative;
  top: 19%;
  padding-left: 25px;
  
  @media screen and (max-width: 480px) {
    top: 5%;
    width: 100%;
  }
  
  @media screen and (max-width: 1200px) {
    top: 4.5%;
    width: 80%;
  }
`;

export const LargeCircle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${portlandOrange[100]};
  position: absolute;
  top: 10%;
`;

export const MediumCircle = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${portlandOrange[100]};
    position: absolute;
    top: 60%;
    left: 8%;
`;

export const SmallCircle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${portlandOrange[100]};
    position: absolute;
    top: 80%;
    left: 2%;
`;

export const BrowseWorks = styled(Link)`
  text-decoration: none;
  font-size: ${typeScale.header3};
  font-weight: bold;
  align-self: center;
  margin-left: 30%;
  position: relative;
  white-space: nowrap;
  color: white;
  transition: color 0.1s ease-in;
  
  &:hover {
    color: ${portlandOrange[100]};
  }

  &:before {
    content: '';
    position: absolute;
    border: 2px solid ${portlandOrange[100]};
    width: 83%;
    height: 3em;
    top: -1em;
    left: -1em;
  }
  
  @media screen and (max-width: 480px) {
    font-size: ${typeScale.paragraph};
    margin-left: 50%;
  }
`;

const Block = css`
  position: absolute;
  background-color: #335257;
  width: 2em;
  height: 2em;
`;

export const BlockOne = styled.div`
  ${Block};
  right: 2em;
`

export const BlockTwo = styled.div`
  ${Block};
  right: 0;
  top: 2em;
`