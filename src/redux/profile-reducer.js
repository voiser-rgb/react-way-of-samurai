import {randomId} from "./store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const defaultAvatar = "https://zefirka.club/wallpapers/uploads/posts/2023-03/1678141011_zefirka-club-p-krutie-avatarki-na-stendoff-29.jpg"

const initialState = {
	posts: [
		{
		id: 1,
		message: "Hi",
		img: defaultAvatar,
		likes: 10
	}, {
		id: 2,
		message: "It's my first post",
		img: defaultAvatar,
		likes: 15
	}, {
		id: 3,
		message: "How are you dude?",
		img: defaultAvatar,
		likes: 20
	},],
	newPostText: "",
	profile: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if (state.newPostText.trim() === "") return state;
			const newPost = {
				id: randomId(),
				message: state.newPostText,
				img: defaultAvatar,
				likes: 0,
			}
			return {
				...state, posts: [...state.posts, newPost], newPostText: "",
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state, newPostText: action.newText
			}
		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;