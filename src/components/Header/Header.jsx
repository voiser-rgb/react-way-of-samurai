import React from 'react';
import styles from "./Header.module.css";
// import logo from "../../img/human--black.png";
import logo from "../../img/solar.png";

const Header = () => {
	return (<header className={styles.header}>
		<img src={logo} alt="logo"/>
	</header>)
}

export default Header;