import styled from "styled-components";
import {neutral, portlandOrange, typeScale} from "../../utils";

export const MainDescription = styled.section`
  margin-bottom: 100px;
  @media only screen and (min-width: 600px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  }
`;
export const HeaderContainer = styled.section`
  height: auto;
  width: 100%;
`;

export const ProjectName = styled.h1`
  font-size: 3rem;
`;

export const SubHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: ${typeScale.header4};
    & div > p:nth-of-type(1){
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${neutral[500]};
  }
  @keyframes link{
  0%{
  width: 100%;
  transform: translateY(0);
  }
  100%{
  width: 50%;
  transform: translateY(-8px);
  background-color: ${portlandOrange[100]};
  }
  }
  @keyframes letter-color{
  from{color: black}
  to{color: ${portlandOrange[100]};}
  }
  & div p:last-of-type{
      display: inline-block;
  }
  
    & div:last-of-type p:last-of-type{
    cursor: pointer;
    }
   & p{
   position: relative;
   }
    
   & i {
   width: 100%;
   position: absolute;
   top: 150%;
   left: 0;
   display: inline-block;
   height: 5px;
   background-color: ${neutral[400]};
   animation: 0.3s;
   }
   & div:last-of-type p:last-of-type:hover  i{
    animation-name: link;
    animation-duration: 0.3s;
    animation-fill-mode: both;
   }
   & i:hover{
   animation: none !important;
   }
   
   & div:last-of-type p:last-of-type:hover{
    animation: letter-color 0.3s 0.1s both;
   }
`;

export const Description = styled.section`
  font-size: ${typeScale.paragraph};
  margin-top: 50px;
  line-height: 2;
  @media only screen and (min-width: 600px){
  margin-top: 0;
  }
`;




