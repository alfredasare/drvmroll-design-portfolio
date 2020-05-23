import {createGlobalStyle} from "styled-components";
import {primaryFont} from "./typography";
import {normalize} from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
        overflow-x; hidden;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-family: ${primaryFont};
    }
    
    a {
        text-decoration: none;
    }
`;