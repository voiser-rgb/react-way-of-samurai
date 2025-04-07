import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";



const Profile = ({dataPosts}) => {
	return <div className={styles.content}>
		<ProfileInfo />
		<MyPosts dataPosts={dataPosts} />
	</div>
}

export default Profile;