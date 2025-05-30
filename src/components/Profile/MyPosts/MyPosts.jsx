import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
	const postsElem = props.posts.map(post => <Post key={post.id} id={post.id} img={post.img} message={post.message}
													likes={post.likes}/>)

	const addPost = (e) => {
		e.preventDefault();
		const action = addPostActionCreator("profilePage");
		props.dispatch(action);
	};

	const onPostChange = (e) => {
		const text = e.target.value;
		const action = updateNewPostActionCreator("profilePage", text)
		props.dispatch(action);
	}

	return (<div className={styles.wrapperPosts}>
		<h3>My posts</h3>
		<form className={styles.formChat}>
			<label htmlFor="chat-message">Enter a message:</label>
			<textarea onChange={onPostChange}
					  value={props.text}
					  id="chat-message"
					  name="message"
					  cols="30" rows="5"
					  placeholder="Write your message..."></textarea>
			<div className={styles.wrapper}>
				<button onClick={addPost}>add post</button>
			</div>
		</form>
		<h3>
			New post
		</h3>
		<div className={styles.posts}>
			{postsElem}
		</div>
	</div>)

}

export default MyPosts;