import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
      <div className={styles.wrapperPosts}>
      <h3>My posts</h3>
      <form className={styles.formChat}>
        <label htmlFor="chat-message">Enter a message:</label>
        <textarea id="chat-message" name="message" cols="30" rows="5" placeholder="Write your message..."></textarea>
        <div className={styles.wrapper}>
          <button>submit</button>
          <button>remove</button>
        </div>
      </form>
        <div>
          New post
        </div>
      <div className={styles.posts}>
      <Post likes="5" name="LousyChicken" message="Hi" />
      <Post likes="10" name="LousyChicken" message="It's my first post"/>
      <Post likes="23" name="LousyChicken" message="How are you dude?"/>
      </div>
    </div>
    )

}

export default MyPosts;