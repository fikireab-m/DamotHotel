import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Spacer } from "./Spacer";

const Toolbar = styled.nav`
  border-radius: 1rem;
  box-shadow: 0 5px 10px 0 var(--black);
  background-color: var(--black2);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    padding: 1rem 1rem;
    gap: 1rem;
  }
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const NavItem = styled.a`
  margin-right: 1.5rem;
  text-decoration: none;
  color: var(--white);
  text-transform: capitalize;
  transition: all 0.5s;
  &:hover {
    color: var(--primary);
    transform: scale(1.25);
  }
  /* &::after {
    content: "";
    height: .2rem;
    width: 2rem;
    position: absolute;
    text-align:center;
    top: 3rem;
    background-color: var(--primary);
    display: inline-block;
  }
  */
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const Drawer = styled.div`
  position: absolute;
  top: 0;
  left: -40rem;
  width: 15rem;
  padding-top: 1rem;
  z-index: 1000;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-shadow: var(--blackShadow);
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  & > div + :not(:first-child) {
    width: 100%;
    padding: 1rem;
    background-color: var(--black);
    border-bottom: 1px solid var(--darkGrey);
    &:hover {
      background-color: var(--black2);
      border-left: 0.2rem solid var(--primaryLight);
    }
  }
`;
const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--lightGrey);
`;

const IconButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  color: var(--white);
  display: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  margin-left: 12rem;
  top: 0;
  border: none;
  padding: 0.5rem;
  background: transparent;
  color: var(--white);
  display: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
const navItems = ["Services", "Downlads", "Contact", "About"];

const NavBar = () => {
  const onOpen = () => {
    document.getElementById("drawer-containerxaioek").style.left = 0;
  };
  const onClose = () => {
    document.getElementById("drawer-containerxaioek").style.left = "-40rem";
  };
  return (
    <>
      <Toolbar>
        <IconButton onClick={onOpen}>
          <h1>Menu</h1>
        </IconButton>
        <Drawer id="drawer-containerxaioek">
          <DrawerHeader>
            <CloseButton onClick={onClose}>
              <h1>X</h1>
            </CloseButton>
          </DrawerHeader>
          {navItems.map((item) => (
            <div>
              <NavItem key={item} href="">
                {item}
              </NavItem>
            </div>
          ))}
        </Drawer>
        <Spacer />
        <NavItem href="">
          {/* <Logo src="" alt="LOGO" /> */}
          <h1>Damot</h1>
        </NavItem>
        <Spacer grow="lg" />
        <MenuBar className="menu">
          {navItems.map((item) => (
            <NavItem key={item} href="">
              {item}
            </NavItem>
          ))}
        </MenuBar>
        <Spacer />
      </Toolbar>
    </>
  );
};

export default NavBar;
