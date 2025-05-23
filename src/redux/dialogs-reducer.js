const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const dialogsReducer = (state, action, id) => {
	switch (action.type) {
		case SEND_MESSAGE:
			const newMessage = {
				id: id, text: state.newMessageText,
			}
			state.messages.push(newMessage);
			state.newMessageText = "";
			return state;
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageText = action.newText;
			return state;
		default:
			return state;
	}
}



export const sendMessageCreator = (page) => ({type: SEND_MESSAGE, page: page});
export const updateNewMessageBodyCreator = (page, text) => ({type: UPDATE_NEW_MESSAGE_BODY, page: page, newText: text});

export default dialogsReducer;