import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
      <div>
      My posts
      <form>
        <textarea></textarea>
        <button>submit</button>
        <button>remove</button>
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