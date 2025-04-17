import React from 'react';
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.wrapper}>
                <img className={styles.avatar}
                    src={props.img}
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