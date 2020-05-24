import React from "react";
import './button.styles';
import {ButtonStyles} from "./button.styles";

const Button = ({children, textColor, backgroundColor, marginLeft}) => {

    return(
        <>
            <ButtonStyles textColor={textColor} backgroundColor={backgroundColor} marginLeft={marginLeft}>
                {children}
            </ButtonStyles>
        </>
    );
};

export default Button;