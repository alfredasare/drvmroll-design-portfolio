import styled from "styled-components";

export const MainBg = styled.div`
  position: absolute;
  right: 0;
  width: 40%;
  height: 900px;
  z-index: -1;
  background-image: url(${require("../../assets/images/socialcut-unsplash.jpg")});
  background-size: cover;                      
  background-repeat: no-repeat;
  background-position: center center;
  
  @media screen and (max-width: 550px) {
    right: 0;
    height: 700px;
  }
`;