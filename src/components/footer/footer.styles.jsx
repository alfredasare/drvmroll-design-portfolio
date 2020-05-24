import styled, {css} from "styled-components";
import {neutral, typeScale} from "../../utils";

export const LinkHoverStyles = css`
    &:before {
        content: '';
        transition: background-color 0.1s ease-in, left 0.1s ease-in;
        left: -10px;
    }
   
    &:hover {
        color: ${neutral[400]};
      
        @media screen and (min-width: 767px) {
            &:before {
                content: '';
                height: 3px;
                width: 40%;
                background-color: ${neutral[400]};
                position: absolute;
                bottom: 5px;
                left: 0;
            }
        }
    }
`;

export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
    color: ${neutral["500"]};
    padding: 15px;
    
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const CopyRight = styled.div`
    max-width: 50%;
    padding: 15px 0px;
    
    @media screen and (max-width: 480px) {
        max-width: 100%;
    }
`;

export const CopyRightText = styled.div`
    font-size: ${typeScale.paragraph}
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const SocialLink = styled.a`
    padding: 10px 5px;
    color: ${neutral[500]};
    display: flex;
    margin-right: 30px;
    transition: color 0.1s ease-in;
    position: relative;
    
    ${LinkHoverStyles};
    
    @media screen and (max-width: 767px) {
        margin-right: 0px;
        padding-right: 15px;
        padding-left: 15px;
    };
    
    
`;

export const SocialIcon = styled.div`
    padding-right: 10px;
    font-size: ${typeScale.iconSize};
`;

export const SocialText = styled.div`
    font-weight: bold;
    
    @media screen and (max-width: 767px) {
        display: none;
    }
`;