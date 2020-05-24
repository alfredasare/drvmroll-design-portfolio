import styled from "styled-components";
import {bgColor, typeScale} from "../../utils";

export const QuoteContainer = styled.section`
    width: 100%;
    background-color: ${bgColor};
    height: 300px;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const QuoteText = styled.div`
    font-size: ${typeScale.header1};
    width: 80%;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    
    @media screen and (max-width: 480px) {
        font-size: ${typeScale.header3};
        width: 100%;
    }
    
      &::before {
        content: open-quote;
      }
    
    
      &::after {
        content: close-quote;
      }
`;

export const ByLine = styled.p`
    font-size: ${typeScale.paragraph};
    padding-top: 20px;
    font-weight: bold;
`;