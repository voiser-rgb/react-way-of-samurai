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
			dispatch={props.dispatch}
			posts={posts}
			text={text}
		/>
	</div>
}

export default Profile;