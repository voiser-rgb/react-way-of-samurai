import React from "react";
import styles from "./Music.module.css";
const Music = () => {
	return (
		<section className={styles.music}>
			<h2 className={styles.title}>Music:</h2>
			<audio className={styles.music__item} src="https://rocknation.su/upload/mp3/Tool/2019%20-%20Fear%20Inoculum/09.%207empest.mp3" controls></audio>
		</section>
	)
}

export default Music;
