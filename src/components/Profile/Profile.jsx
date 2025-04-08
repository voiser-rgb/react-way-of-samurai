import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";



const Profile = ({posts}) => {
	return <div className={styles.content}>
		<ProfileInfo />
		<MyPosts posts={posts} />
	</div>
}

export default Profile;