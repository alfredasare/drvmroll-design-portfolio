import styled from "styled-components";
import {typeScale} from "../../utils";

export const NextContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.p`
  font-size: ${typeScale.paragraph};
  font-weight: 300;
  text-transform: uppercase;
`;

export const NextProject = styled.h4`
  font-size: ${typeScale.header3};
  cursor: pointer;
  & i{
  margin-left: 20px;
    transition: transform 0.5s;

  }
  &:hover i{
  transform: translateX(10px);
  }
`;