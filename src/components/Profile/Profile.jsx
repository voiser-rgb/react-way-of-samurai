import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";



const Profile = (props) => {
	return <div className={styles.content}>
		<ProfileInfo />
		<MyPosts
			posts={props.data.posts}
			addPost={props.addPost}
			updateText={props.updateText}
			text={props.data.newPostText}
		/>
	</div>
}

export default Profile;