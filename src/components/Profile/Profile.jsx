import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


const Profile = (props) => {
	return <div className={styles.content}>
		<ProfileInfo/>
		<MyPostsContainer store={props.store} />
	</div>
}

export default Profile;