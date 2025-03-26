import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import img from "../../img/TheCarinaNebula.jpg";

const Profile = () => {
	return <div className={styles.content}>
		<div>
			<figure>
				<img className={styles.image} src={img} alt="NGC3372"/>
				<figcaption>The Carina Nebula, ESO 128-EN13.It is located at a distance of 6500 to 10,000 light-years
					from
					Earth.
				</figcaption>
			</figure>
		</div>
		<div>
			ava + description
		</div>
		<MyPosts/>
	</div>
}

export default Profile;