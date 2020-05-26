import React from "react";
import './footer.styles';
import {
    CopyRight,
    CopyRightText,
    FooterContainer,
    FooterLinks,
    SocialIcon,
    SocialLink,
    SocialText
} from "./footer.styles";

const Footer = () => {

    return (
        <FooterContainer>
            <CopyRight>
                <CopyRightText>
                    &copy; Design Studios 2020
                </CopyRightText>
            </CopyRight>
            <FooterLinks>
                <SocialLink href="/#" target="_blank" rel="noreferrer">
                    <SocialIcon>
                        <i className="fab fa-facebook-f" aria-hidden="true"/>
                    </SocialIcon>
                    <SocialText>
                        Facebook
                    </SocialText>
                </SocialLink>
                <SocialLink href="/#" target="_blank" rel="noreferrer">
                    <SocialIcon>
                        <i className="fab fa-instagram" aria-hidden="true"/>
                    </SocialIcon>
                    <SocialText>
                        Instagram
                    </SocialText>
                </SocialLink>
                <SocialLink href="/#" target="_blank" rel="noreferrer">
                    <SocialIcon>
                        <i className="fab fa-twitter" aria-hidden="true"/>
                    </SocialIcon>
                    <SocialText>
                        Twitter
                    </SocialText>
                </SocialLink>
                <SocialLink href="/#" target="_blank" rel="noreferrer">
                    <SocialIcon>
                        <i className="fab fa-behance" aria-hidden="true"/>
                    </SocialIcon>
                    <SocialText>
                        Behance
                    </SocialText>
                </SocialLink>
            </FooterLinks>
        </FooterContainer>
    );
};

export default Footer;