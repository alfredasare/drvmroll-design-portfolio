import React, {useState} from "react";
import './navbar.styles';
import {DefaultNav, MobileNav, NavBrand, NavContainer, NavLinkItem, NavLinks} from "./navbar.styles";
import Burger from "../burger/burger.component";
import Menu from "../menu/menu.component";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <NavContainer>
            <MobileNav>
                <NavBrand>brand</NavBrand>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
            </MobileNav>
            <DefaultNav>
                <NavBrand>brand</NavBrand>
                <NavLinks>
                    <NavLinkItem exact={true} activeClassName="active" to="/">Home</NavLinkItem>
                    <NavLinkItem activeClassName="active" to="/about">About</NavLinkItem>
                    <NavLinkItem activeClassName="active" to="/works">Works</NavLinkItem>
                    <NavLinkItem activeClassName="active" to="/contact">Contact</NavLinkItem>
                </NavLinks>
            </DefaultNav>
        </NavContainer>
    );
};

export default NavBar;