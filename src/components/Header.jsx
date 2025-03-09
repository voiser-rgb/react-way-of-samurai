import React from 'react';
import headModule from "./Header.module.css";
import logo from "../img/human--black.png";

const Header = () => {
    return <header className={headModule.header} >;
        <img src={logo} alt="logo" />
    </header>
}

export default Header;