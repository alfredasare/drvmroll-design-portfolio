import styled from "styled-components";

export const ImageDisplayer = styled.section`
  height: 100vh;
  width: 100%;
  background-image: ${({coverImage}) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 50px;
`;