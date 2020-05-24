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
                <NavBrand to="/">brand</NavBrand>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
            </MobileNav>
            <DefaultNav>
                <NavBrand to="/">brand</NavBrand>
                <NavLinks>
                    <NavLinkItem exact={true} activeClassName="active" to="/">Home</NavLinkItem>
                    <CustomNavLink href="/#about">About</CustomNavLink>
                    <NavLinkItem activeClassName="active" to="/works">Works</NavLinkItem>
                    <CustomNavLink href="/#contact">About</CustomNavLink>
                </NavLinks>
            </DefaultNav>
        </NavContainer>
    );
};

export default NavBar;