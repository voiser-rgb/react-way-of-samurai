import React from 'react';
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friend from "../Friends/Friend/Friend.jsx";

const Navbar = (props) => {
	const setActive = ({isActive}) => (isActive ? styles.active : "");

	const friend = props.sidebarPage.friends.map((friend) => <Friend key={friend.id} id={friend.id} name={friend.name}
																	 avatar={friend.avatar}/>);

	return <nav className={styles.nav}>
		<div className={styles.item}><NavLink className={setActive} to="/profile">Profile</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/dialogs">Messages</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/users">Users</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/news">News</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/music">Music</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/todo">Task list</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/pomodoro">Pomodoro Timer</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/settings">Settings</NavLink></div>
		<div className={styles.item}><NavLink className={setActive} to="/friends">Friends:</NavLink>
			<ul className={styles.list}>
				{friend}
			</ul>
		</div>
	</nav>
}

export default Navbar;