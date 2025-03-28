import React from 'react';
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? styles.active : "";

const Navbar = () => {
	return <nav className={styles.nav}>
		<div className={`${styles.item} ${styles.active}`}>
			<NavLink className={setActive} to="/profile">Profile</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/dialogs">Messages</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/news">News</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/music">Music</NavLink>
		</div>

		<div className={styles.item}>
			<NavLink className={setActive} to="/settings">Settings</NavLink>
		</div>
	</nav>
}

export default Navbar;