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
                        <i className="fa fa-facebook" aria-hidden="true"/>
                    </SocialIcon>
                    <SocialText>
                        Facebook
                    </SocialText>
                </SocialLink>
                <SocialLink href="/#" target="_blank" rel="noreferrer">
                    <SocialIcon>
                        <i className="fa fa-instagram" aria-hidden="true"/>
                    </SocialIcon>
                    <SocialText>
                        Instagram
                    </SocialText>
                </SocialLink>
                <SocialLink href="/#" target="_blank" rel="noreferrer">
                    <SocialIcon>
                        <i className="fa fa-twitter" aria-hidden="true"/>
                    </SocialIcon>
                    <SocialText>
                        Twitter
                    </SocialText>
                </SocialLink>
                <SocialLink href="/#" target="_blank" rel="noreferrer">
                    <SocialIcon>
                        <i className="fa fa-behance" aria-hidden="true"/>
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