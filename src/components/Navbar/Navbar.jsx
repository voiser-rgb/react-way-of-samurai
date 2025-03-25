import React from 'react';
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? styles.active : "";

const Navbar = () => {
	return <nav className={styles.nav}>
		<div className={`${styles.item} ${styles.active}`}>
			<NavLink className={setActive} to="/Profile">Profile</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/Dialogs">Messages</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/News">News</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/Music">Music</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/Settings">Settings</NavLink>
		</div>
	</nav>
}

export default Navbar;