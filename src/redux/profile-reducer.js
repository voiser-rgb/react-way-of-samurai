import {randomId} from "./store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_TEXT';

const initialState = {
		posts: [{
			id: 1,
			message: "Hi",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
			likes: 10
		}, {
			id: 2,
			message: "It's my first post",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
			likes: 15
		}, {
			id: 3,
			message: "How are you dude?",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
			likes: 20
		},],
		newPostText: "",
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: randomId(),
				message: state.newPostText,
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
				likes: 0,
			}
			state.posts.push(newPost);
			state.newPostText = "";
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = (page) => ({type: ADD_POST, page: page});
export const updateNewPostActionCreator = (page, text) => ({type: UPDATE_NEW_POST_TEXT, page: page, newText: text});

export default profileReducer;