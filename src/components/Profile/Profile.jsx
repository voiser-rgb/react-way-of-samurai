import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


const Profile = (props) => {
	return <div className={styles.content}>
		<ProfileInfo profile={props.profile} />
		<MyPostsContainer />
	</div>
}

export default Profile;