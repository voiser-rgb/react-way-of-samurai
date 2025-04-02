import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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
	return (<p id={id} className={styles.message}>{text}</p>)
}

const Dialogs = (props) => {
	const dialogs = [
		{id: 1, name: "Andrey"},
		{id: 2, name: "Vika"},
		{id: 3, name: "Pavel"},
		{id: 4, name: "Elena"},
		{id: 5, name: "FatBot"},
		{id: 6, name: "LittleHorse"},
		{id: 7, name: "Kuzma"},
		{id: 8, name: "Mikasa"},
	]
	const messages = [
		{id: 1, text: "Hello my friends"},
		{id: 2, text: "Yo"},
		{id: 3, text: "Hi"},
		{id: 4, text: "Hello, how are you?"},
		{id: 5, text: "Ooo, haven't seen you a long time!"},
		{id: 6, text: "Who are you, dude?"},
		{id: 7, text: "Ahahaha, an interesting situation"},
		{id: 8, text: "Well, we're glad you're back"},
	]

	const dialogsElem = dialogs.map( dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>)
	const messagesElem = messages.map( message => <Message key={message.id} id={message.id} message={message.text}/>)

	return (<div>
		<h2 className={styles.title}>Dialogs:</h2>
		<div className={styles.dialogs}>

			<ul className={styles.list}>
				{dialogsElem}
			</ul>

			<div className={styles.messages}>
				{messagesElem}
			</div>
		</div>
	</div>);
}

export default Dialogs;