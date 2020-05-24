import styled from "styled-components";
import {typeScale} from "../../utils";

export const Social = styled.ul`
    position: absolute;
    z-index: 1;
    left: 1.5em;
    top: 30%;
    text-align: center;

    li {
      margin-bottom: 2em;

      img {
        width: 20px;
      }

      &:last-child img{
        width: 10px;
      }
    }
    
    @media screen and (max-width: 550px) {
        display: none;
    }
`;

export const LandingSocialLinks = styled.li`
   color: black;
   list-style-type: none;
   cursor: pointer;
   font-size: ${typeScale.header3};
   opacity: .8;
   transition: color 0.3s ease-in;
   
   &:hover {
    opacity: 1.0;
   }
`;

