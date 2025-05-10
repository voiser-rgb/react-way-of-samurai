import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {
	const dialogsElem = props.data.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}
																	 img={dialog.img}/>)
	const messagesElem = props.data.messages.map(message => <Message key={message.id} id={message.id}
																	 text={message.text}/>)
	const newMessage = React.createRef();


	const addMessage = (e) => {
		e.preventDefault();
		props.addMessage("dialogsPage");
	}

	const onMessageChange = () => {
		let message = newMessage.current.value;
		props.updateText("dialogsPage", message);
	}

	return (<div>
		<h2 className={styles.title}>Dialogs:</h2>
		<div className={styles.dialogs}>

			<ul className={styles.list}>
				{dialogsElem}
			</ul>

			<div className={styles.messages}>
				{messagesElem}
			</div>
			<form className={styles.form}>
				<textarea
					onChange={onMessageChange}
					ref={newMessage} value={props.data.newMessageText}
					name="message"
					id="chat-message"
					rows="1"
					placeholder="Write your message...">
				</textarea>
				<div>
					<button onClick={addMessage}>add</button>
				</div>
			</form>
		</div>
	</div>);
}

export default Dialogs;