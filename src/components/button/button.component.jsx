import React from "react";
import './button.styles';
import {ButtonStyles} from "./button.styles";

const Button = (props) => {

    return(
        <>
            <ButtonStyles {...props}>
                {props.children}
            </ButtonStyles>
        </>
    );
};

export default Button;