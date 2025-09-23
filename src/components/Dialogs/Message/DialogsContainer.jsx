import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// onAlert: () => {alert("TEST")},
		onSendMessage: () => {
			dispatch(sendMessageCreator());
		}, onMessageChange: (message) => {
			const action = updateNewMessageBodyCreator(message);
			dispatch(action);
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;