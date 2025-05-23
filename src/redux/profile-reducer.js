const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_TEXT';

const profileReducer = (state, action, id) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: id,
				message: state.newPostText,
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
				likes: 0,
			}
			state.posts.push(newPost);
			console.log("profileReducer: ", newPost);
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