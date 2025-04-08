import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';



const Dialogs = ({dialogs, messages}) => {

	const dialogsElem = dialogs.map( dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
	const messagesElem = messages.map( message => <Message key={message.id} id={message.id} text={message.text}/>)

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