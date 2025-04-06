import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";



const Profile = () => {

	const posts = [
		{id: 1, message: "Hi", likes: 10},
		{id: 2, message: "It's my first post", likes: 15},
		{id: 3, message: "How are you dude?", likes: 20},
	]

	return <div className={styles.content}>
		<ProfileInfo />
		<MyPosts posts={posts} />
	</div>
}

export default Profile;