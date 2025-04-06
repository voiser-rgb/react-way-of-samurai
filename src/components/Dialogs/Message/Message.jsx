import React from 'react';
import styles from './Message.module.css';


const Message = (props) => {
	const id = props.id;
	const text = props.message;
	return (<p id={id} className={styles.message}>{text}</p>)
}



export default Message;