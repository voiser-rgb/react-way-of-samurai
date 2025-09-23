import React from 'react';
import styles from "./ProfileInfo.module.css";
import img from "../../../img/TheCarinaNebula.jpg";

const ProfileInfo = () => {
	return (<div>
		<div>
			<figure className={styles.wrapperImg}>
				<img className={styles.image} src={img} alt="NGC3372"/>
				<figcaption>The Carina Nebula, ESO 128-EN13.It is located at a distance of 6500 to 10,000
					light-years
					from
					Earth.
				</figcaption>
			</figure>
		</div>
		<div className={styles.description}>
			ava + description
		</div>
	</div>);
}

export default ProfileInfo;