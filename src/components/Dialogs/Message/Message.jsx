import React from 'react';
import styles from './Message.module.css';


const Message = (message) => {
	const id = message.id;
	const text = message.text;
	return (<p id={id} className={styles.message}>{text}</p>)
}



export default Message;