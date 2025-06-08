import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = () => {
	return <StoreContext.Consumer>
		{(store) => {
			const state = store.getState().dialogsPage;

			const handleSendMessage = () => {
				store.dispatch(sendMessageCreator());
			}

			const handleMessageChange = (message) => {
				const action = updateNewMessageBodyCreator(message);
				store.dispatch(action);
			}
			return (<Dialogs onSendMessage={handleSendMessage}
							 onMessageChange={handleMessageChange}
							 dialogsPage={state}/>)
		}}
	</StoreContext.Consumer>

}

export default DialogsContainer;