import "./topbar.css";
import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./TopbarStyle";

const Topbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" className="logo">
          <img
            className="logo"
            loading="lazy"
            src={require("../../assets/images/ing-light.png")}
            alt="Page d'accueil ING"
            width="99"
            height="26"
          />
        </NavLink>
        <Bars />
        <NavLink className="search-img" to="/" activeStyle>
          <img src="/images/Search.svg" width="20px" height="20px" alt=""></img>
        </NavLink>
        <NavMenu>
          <NavLink to="/" activeStyle>
            <a href="/" className="topbar-link">
              Vos projets
            </a>
          </NavLink>
          <NavLink to="/" activeStyle>
            <a href="/" className="topbar-link">
              Besoin d'aide ?
            </a>
          </NavLink>
          <NavBtn>
            <a href="/" className="btn-client-ing">
              Espace Client
            </a>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Topbar;
