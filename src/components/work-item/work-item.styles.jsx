import styled from "styled-components";
import {neutral, typeScale} from "../../utils";
import {Link} from "react-router-dom";
import {LinkHoverStyles} from "../footer/footer.styles";

export const WorkItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5em;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 2fr 1fr;
  
  @media screen and (max-width: 1300px) {
    grid-gap: 3em;
  }
  
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-gap: 3em;
  }
`;

export const WorkItemImage = styled.div`
  height: 400px;
  border-radius: 10px;
  cursor: pointer;
  width: 50%;
  margin: auto;
  background-image: ${({coverImage}) => `url(${coverImage})`};
  background-size: cover;                      
  background-repeat: no-repeat;
  background-position: center center;
  
  @media screen and (max-width: 1300px) {
    width: 80%;
  }
  
  @media screen and (max-width: 550px) {
    height: 400px;
    width: 100%;
    margin: auto;
    background-color: #333;
  }
`;

export const WorkItemText = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: ${typeScale.header3};
  line-height: 1.3em;
  
  @media screen and (max-width: 550px) {
        width: 100%;
        margin: 0 auto;
        font-size: ${typeScale.header4};
        line-height: 1.2em;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        font-size: ${typeScale.header5};
        line-height: 1.3em;
  }
`;

export const WorkCategory = styled.p`
  opacity: 0.7;
  font-size: ${typeScale.paragraph};
`;

export const ViewLink = styled(Link)`
    font-size: 0.8em;
    padding: 10px 0;
    color: ${neutral[500]};
    display: flex;
    margin-right: 30px;
    transition: color 0.1s ease-in;
    position: relative;
    width: 40%;
  
  ${LinkHoverStyles}
`;