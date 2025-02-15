import React, {useState} from "react";
import './navbar.styles';
import {CustomNavLink, DefaultNav, MobileNav, NavBrand, NavContainer, NavLinkItem, NavLinks} from "./navbar.styles";
import Burger from "../burger/burger.component";
import Menu from "../menu/menu.component";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <NavContainer>
            <MobileNav>
                <NavBrand to="/#home">brand</NavBrand>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
            </MobileNav>
            <DefaultNav>
                <NavBrand to="/#home">brand</NavBrand>
                <NavLinks>
                    <NavLinkItem exact={true} activeClassName="active" to="/#home">Home</NavLinkItem>
                    <CustomNavLink to="/#about">About</CustomNavLink>
                    <CustomNavLink to="/#works">Works</CustomNavLink>
                    <CustomNavLink to="/#contact">Contact</CustomNavLink>
                </NavLinks>
            </DefaultNav>
        </NavContainer>
    );
};

export default NavBar;
