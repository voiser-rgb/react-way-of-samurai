import React from 'react';
import styles from './Message.module.css';


const Message = (dataMessages) => {
	const id = dataMessages.id;
	const text = dataMessages.message;
	return (<p id={id} className={styles.message}>{text}</p>)
}



export default Message;