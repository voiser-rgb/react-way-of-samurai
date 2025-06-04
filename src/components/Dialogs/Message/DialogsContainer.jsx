import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";


const DialogsContainer = (props) => {

	const state = props.store.getState().dialogsPage;

	const handleSendMessage = () => {
		props.store.dispatch(sendMessageCreator());
	}

	const handleMessageChange = (message) => {
		const action = updateNewMessageBodyCreator(message);
		props.store.dispatch(action);
	}

	return (<Dialogs onSendMessage={handleSendMessage}
					 onMessageChange={handleMessageChange}
					 dialogsPage={state}
		/>

	);
}

export default DialogsContainer;