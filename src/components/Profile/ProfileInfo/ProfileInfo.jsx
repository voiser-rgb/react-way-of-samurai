import React from 'react';
import styles from "./ProfileInfo.module.css";
import img from "../../../img/TheCarinaNebula.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if(!props.profile){
		return <Preloader />
	}

	const contacts = Object.entries(props.profile.contacts);
	const setActive = props.profile.lookingForAJob ? styles.statusGreen : styles.statusRed;

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
		<article className={styles.userCard}>
			<figure className={styles.wrapper}>
				<img className={styles.avatar} src={props.profile.photos.large} alt="img"/>
				<div className={styles.wrapperStatus}>
					<span className={`${styles.statusDot} ${setActive}`}></span>
					<p className={styles.status}>{props.profile.lookingForAJob ? "I'm  looking for a job" : "I'm not looking for a job"}</p>
				</div>
			</figure>

			<div className={styles.content}>

				<header className={styles.header}>
					<h2 className={styles.name}>{props.profile.fullName}</h2>
				</header>

				<section className={styles.about}>
					<p>About me: {props.profile.aboutMe}</p>
					<p>Description: {props.profile.lookingForAJobDescription}</p>
				</section>

				<footer className={styles.links}>
					<ul className={styles.contacts}>
						{contacts.map(([name, value]) => (
							value ? <li key={value}>
								<h3 className={styles.subtitle}>{name}: </h3> {value}
							</li> : null
						))}
					</ul>
				</footer>
			</div>
		</article>
	</div>);
}

export default ProfileInfo;