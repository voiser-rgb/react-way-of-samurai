import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post.jsx';

const MyPosts = ({posts}) => {
	const postsElem = posts.map( post => <Post key={post.id} id={post.id} img={post.img} message={post.message} likes={post.likes}/>)


	return (<div className={styles.wrapperPosts}>
		<h3>My posts</h3>
		<form className={styles.formChat}>
			<label htmlFor="chat-message">Enter a message:</label>
			<textarea id="chat-message" name="message" cols="30" rows="5"
					  placeholder="Write your message..."></textarea>
			<div className={styles.wrapper}>
				<button>submit</button>
				<button>remove</button>
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