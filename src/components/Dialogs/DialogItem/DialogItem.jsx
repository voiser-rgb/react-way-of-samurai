import React from 'react';
import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/anonymous.png";

const setActive = ({isActive}) => isActive ? styles.active : "";

const DialogItem = (dialog) => {
	const id = dialog.id;
	const name = dialog.name;
	const img = dialog.img;

	console.log("img: ", img)
	return (<li id={id} className={styles.item}>
		<NavLink to={`/dialogs/${id}`} end className={setActive}>
			{/*<img className={styles.avatar}*/}
			{/*	 src={img}*/}
			{/*	 alt="avatar"/>*/}
			<img className={styles.avatar}
				 // src={img != null ? img : userPhoto}
				 src={img || userPhoto}
				 onError={(e) => {
					 e.currentTarget.onerror = null;
					 e.currentTarget.src = userPhoto;
				 }}
				 alt="avatar"/>
			<span className={styles.text}>{name}</span>
		</NavLink>



	</li>);
}

export default DialogItem;