import React from 'react';
import styles from "./Header.module.css";
// import logo from "../../img/solar.png";
import GalaxyAnimation from "../common/GalaxyAnimation/GalaxyAnimation";

const Header = () => {
	return (<header className={styles.header}>
		<div className={styles.wrapper}>
			{/*<span>AlienGalaxy</span>*/}
			<div><GalaxyAnimation /></div>
			<h1>
				&gt;&gt; AlienGalaxy
			</h1>
			{/*<div><img src={logo} alt="logo"/></div>*/}
		</div>
	</header>)
}

export default Header;