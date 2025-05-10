import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";


const Profile = (props) => {
	const posts = props.profilePage.posts;
	const text = props.profilePage.newPostText;


	return <div className={styles.content}>
		<ProfileInfo/>
		<MyPosts
			posts={posts}
			addPost={props.addPost}
			updateText={props.updateText}
			text={text}
		/>
	</div>
}

export default Profile;