import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post.jsx';


// const posts = [
// 	{id: 1, message: "Hi", likes: 10},
// 	{id: 2, message: "It's my first post", likes: 15},
// 	{id: 3, message: "How are you dude?", likes: 20},
// ]
// const postsElem = posts.map( post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes}/>)
// console.log(postsElem)

const MyPosts = (props) => {
	const postsElem = props.posts.map( post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes}/>)


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