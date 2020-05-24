import React from 'react';
import { StyledMenu } from './menu.styles';
import {NavLink} from "react-router-dom";

const Menu = ({open, setOpen}) => {

    const isHidden = !!open;
    const tabIndex = isHidden ? 0 : -1;

    return <StyledMenu open={open} aria-hidden={!isHidden}>
        <NavLink to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            Home
        </NavLink>
        <NavLink to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            About
        </NavLink>
        <NavLink to="/works" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            Works
        </NavLink>
        <NavLink to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            Contact
        </NavLink>
    </StyledMenu>
}
export default Menu;