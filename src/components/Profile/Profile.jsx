import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


const Profile = () => {
	return <div className={styles.content}>
		<ProfileInfo/>
		<MyPostsContainer />
	</div>
}

export default Profile;