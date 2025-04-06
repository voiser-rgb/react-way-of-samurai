import React from 'react';
import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? styles.active : "";

const DialogItem = (props) => {
	const id = props.id;
	const name = props.name;
	return (<li id={id} className={styles.item}>
		<NavLink to={`/dialogs/${id}`} className={setActive}>
			<span className={styles.text}>{name}</span>
		</NavLink>
	</li>);
}

export default DialogItem;