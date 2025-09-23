import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
	const postsElem = props.posts.map(post => <Post key={post.id} id={post.id} img={post.img} message={post.message}
													likes={post.likes}/>)
	const onAddPost = (e) => {
		e.preventDefault();
		props.addPost()
	};

	const onPostChange = (e) => {
		const text = e.target.value;
		props.updateNewPostText(text);
	}


	return (<div className={styles.wrapperPosts}>
		<h3>My posts</h3>
		<form className={styles.formChat}>
			<label htmlFor="chat-message">Enter a message:</label>
			<textarea onChange={onPostChange}
					  value={props.newPostText}
					  id="chat-message"
					  name="message"
					  cols="30" rows="5"
					  placeholder="Write your message..."></textarea>
			<div className={styles.wrapper}>
				<button onClick={onAddPost}>add post</button>
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