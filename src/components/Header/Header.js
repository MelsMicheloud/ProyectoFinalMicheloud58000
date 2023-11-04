import React from "react";
import Logo from "./assets/logo_petlover_horizontal_1.png";
import './Header.css';
import "bulma/css/bulma.css";

function Header() {
    return (
        <nav id="MyNav" className="navbar">
            <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="Logo PetLover" />
            </a>
        </nav>
    )
}

export default Header;
