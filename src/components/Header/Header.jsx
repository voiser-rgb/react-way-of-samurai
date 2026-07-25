import React from 'react';
import styles from "./Header.module.css";
import GalaxyAnimation from "../common/GalaxyAnimation/GalaxyAnimation";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (<header className={styles.header}>
		<div className={styles.wrapper}>
			{/*<span>AlienGalaxy</span>*/}
			<div><GalaxyAnimation /></div>
			<h1>
				&gt;&gt; AlienGalaxy
			</h1>
			<div className={styles.auth}>
				{props.isAuth ? <span className={styles.login}>{`[ ${props.login} ]`}</span>: <NavLink className={styles.authFalse} to="/login">[ login ]</NavLink>}
			</div>
		</div>
	</header>)
}

export default Header;