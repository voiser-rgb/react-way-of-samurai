import {randomId} from "./store";
//* Actions type
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

//* initialState(начальное состояние) - используется при первом вызове редьюсера
//* Чтобы state не был undefined и содержал исходные данные 
const initialState = {
	dialogs: [{
		id: 1,
		name: "Andrey",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
	}, {id: 2, name: "Vika", img: "https://shibann.ru/males/blin_akimo/2.jpg",}, {
		id: 3,
		name: "Pavel",
		img: "https://avatars.steamstatic.com/17747087ad49d60f8b5cfb19c3fe88fd62c70ec5_medium.jpg",
	}, {
		id: 4,
		name: "Elena",
		img: "https://i.pinimg.com/originals/19/23/ab/1923abf61f8d9fbeefd0bb91d8e997a9.jpg",
	}, {
		id: 5, name: "FatBot", img: "https://images.genius.com/144774e41a4b0695f389307c91a2604b.749x748x1.jpg",
	}, {
		id: 6,
		name: "LittlePuppy",
		img: "https://i.pinimg.com/736x/5b/21/60/5b2160463292c9bce84fdb4df10a8c0e.jpg",
	}, {
		id: 7,
		name: "Kuzma",
		img: "https://avatars.akamai.steamstatic.com/a2a053943578da804dd6f677a38d6e6d1c38ac3a_medium.jpg",
	}, {
		id: 8, name: "Mikasa", img: "https://pp.userapi.com/c850732/v850732960/5e967/imaJzJkBFnU.jpg?ava=1.jpg",
	},],
	messages: [{id: 1, text: "Hello my friends"}, {id: 2, text: "Yo"}, {id: 3, text: "Hi"}, {
		id: 4, text: "Hello, how are you?"
	}, {id: 5, text: "Ooo, haven't seen you a long time!"}, {id: 6, text: "Who are you, dude?"}, {
		id: 7, text: "Ahahaha, an interesting situation"
	}, {id: 8, text: "Well, we're glad you're back"},], newMessageText: "",
}
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			 //* ограничиваем отправку сообщения если оно пустое и исключаем пробелы
			if (state.newMessageText.trim() === "") return state;
			const newMessage = {
				id: randomId(), text: state.newMessageText,
			}
			return  {
				...state,
				messages: [...state.messages, newMessage],
				newMessageText: "",
			};
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageText: action.newText,
			};
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = ( text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});

export default dialogsReducer;