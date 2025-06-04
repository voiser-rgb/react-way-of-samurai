import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";

const MyPostsContainer = (props) => {
	const state = props.store.getState();
	const onAddPost = () => {
		const action = addPostActionCreator();
		props.store.dispatch(action);
	};

	const onPostChange = (text) => {
		const action = updateNewPostActionCreator(text)
		props.store.dispatch(action);
	}

	return (<MyPosts updateNewPostText = {onPostChange}
					 addPost = {onAddPost}
					 posts={state.profilePage.posts}
					 newPostText = {state.profilePage.newPostText}
	/>)

}

export default MyPostsContainer;