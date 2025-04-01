import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink, useParams} from "react-router-dom";

const setActive = ({isActive}) => isActive ? styles.active : "";

const Dialog = (props) => {
	const id = props.id;
	const name = props.name;
	return (<li id={id} className={styles.item}>
		<NavLink to={`/dialogs/${id}`} className={setActive}>
			<span className={styles.text}>{name}</span>
		</NavLink>
	</li>);
}

const Message = (props) => {
	const id = props.id;
	const text = props.message;
	return (
		<p id= {id} className={styles.message}>{text}</p>
	)
}

const Dialogs = (props) => {
	//! Не забудь что есть useParams()
	// const { id } = useParams();

	const dialogsData = [
		{id: 1, name: "Andrey"},
		{id: 2, name: "Vika"},
		{id: 3, name: "Pavel"},
		{id: 4, name: "Elena"},
		{id: 5, name: "FatBot"},
		{id: 6, name: "LittleHorse"},
		{id: 7, name: "Kuzma"},
		{id: 8, name: "Mikasa"},
	]
	const messagesData = [
		{id: 1, message: "Hello my friends"},
		{id: 2, message: "Yo"},
		{id: 3, message: "Hi"},
		{id: 4, message: "Hello, how are you?"},
		{id: 5, message: "Ooo, haven't seen you a long time!"},
		{id: 6, message: "Who are you, dude?"},
		{id: 7, message: "Ahahaha, an interesting situation"},
		{id: 8, message: "Well, we're glad you're back"},
	]

	return (<div>
		<h2 className={styles.title}>Dialogs:</h2>
		<div className={styles.dialogs}>

			<ul className={styles.list}>
				{dialogsData.map((item) => (
					<Dialog key={item.id} id={item.id} name={item.name} />
				))}
			</ul>

			<div className={styles.messages}>
				{messagesData.map((item) => (
					<Message key={item.id} id={item.id} message={item.message} />
				))}
			</div>
		</div>
	</div>);
}

export default Dialogs;