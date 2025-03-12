import React from 'react';
import styles from "./Post.module.css";

const Post = (props) => {
    return (
      <div className={styles.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg" alt="avatar" />
         <span>{props.name}: </span> 
         <span>{props.message}</span> 
          <div>
            <span>like {props.likes}</span> 
          </div>
        </div>
    )

}

export default Post;