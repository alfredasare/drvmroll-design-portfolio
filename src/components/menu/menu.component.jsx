import React from 'react';
import { StyledMenu } from './menu.styles';
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Menu = ({open, setOpen}) => {

    const isHidden = !!open;
    const tabIndex = isHidden ? 0 : -1;

    return <StyledMenu open={open} aria-hidden={!isHidden}>
        <NavLink to="/#home" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            Home
        </NavLink>
        <HashLink to="/#about" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            About
        </HashLink>
        <HashLink to="/#works" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            Works
        </HashLink>
        <HashLink to="/#contact" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            Contact
        </HashLink>
    </StyledMenu>
}
export default Menu;
