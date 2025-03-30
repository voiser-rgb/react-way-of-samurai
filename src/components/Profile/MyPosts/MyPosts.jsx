import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post.jsx';


const postData = [
  {id: 1, message: "Hi", likes: 10},
  {id: 2, message: "It's my first post", likes: 15},
  {id: 3, message: "How are you dude?", likes: 20},
]

const MyPosts = () => {
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
		<div>
			New post
		</div>
		<div className={styles.posts}>
          {postData.map((item) => (
              <Post id={item.id} message={item.message} likes={item.likes} />
          ))}
		</div>
	</div>)

}

export default MyPosts;