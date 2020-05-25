import styled from "styled-components";
import {neutral} from "../../utils";

export const WorkListContainer = styled.section`
  padding: 50px;
  height: 100%;
  background-color: ${neutral[200]};
  width: 100%;
  
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const WorkListHeader = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-top: 20px
`;