import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = (props) => {
	return (<StoreContext.Consumer>
		{(store) => {
			const state = store.getState();

			const onAddPost = () => {
				const action = addPostActionCreator();
				store.dispatch(action);
			};

			const onPostChange = (text) => {
				const action = updateNewPostActionCreator(text)
				store.dispatch(action);
			}

			return <MyPosts updateNewPostText={onPostChange}
							addPost={onAddPost}
							posts={state.profilePage.posts}
							newPostText={state.profilePage.newPostText}
			/>
		}}
	</StoreContext.Consumer>)
}

export default MyPostsContainer;