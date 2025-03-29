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
	return (<div>
		<h2 className={styles.title}>Dialogs:</h2>
		<div className={styles.dialogs}>

			<ul className={styles.list}>
				<Dialog name="Andrey" id="1"/>
				<Dialog name="Vika" id="2"/>
				<Dialog name="Pavel" id="3"/>
				<Dialog name="Elena" id="4"/>
				<Dialog name="FatBot" id="5"/>
				<Dialog name="LittleHorse" id="6"/>
				<Dialog name="Kuzya" id="7"/>
				<Dialog name="Mikasa" id="8"/>
			</ul>

			<div className={styles.messages}>
				<Message message="Hello my friends" id="1" />
				<Message message="Yo" id="2" />
				<Message message="Hi" id="3" />
				<Message message="Hello, how are you?" id="4" />
				<Message message="Ooo, haven't seen you a long time!" id="5" />
				<Message message="Who are you, dude?" id="6" />
				<Message message="Ahahaha, an interesting situation" id="7" />
				<Message message="Well, we're glad you're back" id="8" />
			</div>
		</div>
	</div>);
}

export default Dialogs;