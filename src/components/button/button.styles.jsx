import styled from "styled-components";
import {typeScale} from "../../utils";

export const ButtonStyles = styled.button`
  border-radius: 0;
  border: none;
  font-size: ${typeScale.header4};
  padding: ${({padding}) => padding ? padding : "10px 30px"};
  color: ${({textColor}) => textColor};
  background-color: ${({backgroundColor}) => backgroundColor};
  margin-left: ${({marginLeft}) => marginLeft};
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  
  &:hover {
    opacity: 0.7;
  }
`;