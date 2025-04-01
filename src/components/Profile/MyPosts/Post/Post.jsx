import React from 'react';
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.wrapper}>
                <img className={styles.avatar}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg"
                    alt="avatar"/>
                <div className={styles.likes}>
                    <span>like {props.likes}</span>
                </div>
            </div>
            <span className={styles.message}>{props.message}</span>
        </div>
    )

}

export default Post;