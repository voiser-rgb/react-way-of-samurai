import React from 'react';
import styles from './Friend.module.css';
const Friend = (props) => {
	const id = props.id;
	const name = props.name;
	const avatar = props.avatar;
	return (<li id={id} className={styles.item}>
			<img src={avatar} alt="avatar"/>
			<span className={styles.text}>{name}</span>
	</li>);
}

export default Friend;