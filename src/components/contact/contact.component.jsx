import React from "react";
import './contact.styles';
import {
    Address, AddressDetails, AddressHead, AddressLine,
    ContactContainer,
    WorkText,
    WorkTogether,
    WorkTogetherHead
} from "./contact.styles";
import Button from "../button/button.component";

const Contact = () => {

    return (
        <ContactContainer id="contact">
            <WorkTogether>
                <WorkTogetherHead>
                    Let's work together
                </WorkTogetherHead>
                <WorkText>
                    Anything you need help with ? Wait are you waiting for? Get in touch...
                </WorkText>
                <Button padding="20px 30px" backgroundColor="white" onClick={() => window.location.href="mailto:designstudios@gmail.com"}>designstudios@gmail.com</Button>
            </WorkTogether>
            <Address>
                <AddressHead>We're located at</AddressHead>
                <AddressDetails>
                    <AddressLine>Lashibi, Tema Comm 19</AddressLine>
                    <AddressLine>Tel : +2330203334455</AddressLine>
                </AddressDetails>
            </Address>
        </ContactContainer>
    );
};

export default Contact;