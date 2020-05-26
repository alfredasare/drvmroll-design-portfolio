import styled from "styled-components";
import {neutral, typeScale} from "../../utils";

export const ContactContainer = styled.section`
  padding: 30px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${neutral[200]};
  
  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const WorkTogether = styled.div`
  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`;

export const WorkTogetherHead = styled.h1`
  font-size: 2em;
`;

export const WorkText = styled.p`
  font-size: ${typeScale.paragraph};
  margin-bottom: 40px;
  
  
  @media screen and (min-width: 550px) and (max-width: 1200px){
    width: 80%;
  }
`;

export const Address = styled.div`
  @media screen and (max-width: 550px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const AddressHead = styled.h1`
  font-size: 2em;
  
  @media screen and (max-width: 550px) {
    text-align: center;
  }
`;

export const AddressDetails = styled.div`
  font-size: ${typeScale.paragraph};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media screen and (max-width: 550px) {
    align-items: center;
  }
`;

export const AddressLine = styled.p`

`;