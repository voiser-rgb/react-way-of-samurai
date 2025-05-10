import React from 'react';
import styles from "./Post.module.css";

const Post = (props) => {

	const img = props.img;
	const likes = props.likes;
	const message = props.message;

	return (<div className={styles.item}>
		<div className={styles.wrapper}>
			<img className={styles.avatar}
				 src={img}
				 alt="avatar"/>
			<div className={styles.likes}>
				<span>like {likes}</span>
			</div>
		</div>
		<span className={styles.message}>{message}</span>
	</div>)

}

export default Post;