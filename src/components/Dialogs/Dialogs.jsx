import React from 'react';
import styles from './Dialogs.module.css';

//! Test setActive
const setActive = ({isActive}) => isActive ? styles.active : "";

const Dialogs = (props) => {
	return (<div>
		<h2 className={styles.title}>Dialogs:</h2>
		<div className={styles.dialogs}>
			<ul className={styles.list}>
				 {/*Test setActive */}
				<li id="1" className={`${styles.item} ${setActive}`}>Andrey</li>
				<li id="2" className={styles.item}>Vika</li>
				<li id="3" className={styles.item}>Pavel</li>
				<li id="4" className={styles.item}>Elena</li>
				<li id="5" className={styles.item}>Alexandr</li>
				<li id="6" className={styles.item}>Sonya</li>
				<li id="7" className={styles.item}>Ponchito</li>
				<li id="8" className={styles.item}>Sergei</li>
			</ul>

			<div className={styles.messages}>
				<p id="1" className={styles.message}>Hello my friends</p>
				<p id="2" className={styles.message}>Yo</p>
				<p id="3" className={styles.message}>Hi</p>
				<p id="4" className={styles.message}>Hello, how are you?</p>
				<p id="5" className={styles.message}>Ooo, haven't seen you a long time!</p>
				<p id="6" className={styles.message}>Who are you, dude?</p>
				<p id="7" className={styles.message}>Ahahaha, an interesting situation</p>
				<p id="8" className={styles.message}>Well, we're glad you're back</p>
			</div>
		</div>
	</div>);
}

export default Dialogs;