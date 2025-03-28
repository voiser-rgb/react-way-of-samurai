import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink, useParams} from "react-router-dom";

const setActive = ({isActive}) => isActive ? styles.active : "";

const Dialogs = (props) => {
	// Не забудь что есть useParams()
	// const { id } = useParams();
	return (<div>
		<h2 className={styles.title}>Dialogs:</h2>
		<div className={styles.dialogs}>
			<ul className={styles.list}>
				<li  id="1" className={styles.item}>
					<NavLink to="/dialogs/1" className={setActive}>
						<span className={styles.text}>Andrey</span>
					</NavLink>
				</li>
				<li id="2" className={styles.item}>
					<NavLink to="/dialogs/2" className={setActive}>
						<span className={styles.text}>Vika</span>
					</NavLink>
				</li>
				<li id="3" className={styles.item}>
					<NavLink to="/dialogs/3" className={setActive}>
						<span className={styles.text}>Pavel</span>
					</NavLink>
				</li>
				<li id="4" className={styles.item}>
					<NavLink to="/dialogs/4" className={setActive}>
						<span className={styles.text}>Turk</span>
					</NavLink>
				</li>
				<li id="5" className={styles.item}>
					<NavLink to="/dialogs/5" className={setActive}>
						<span className={styles.text}>Alex</span>
					</NavLink>
				</li>
				<li id="6" className={styles.item}>
					<NavLink to="/dialogs/6" className={setActive}>
						<span className={styles.text}>Sonya</span>
					</NavLink>
				</li>
				<li id="7" className={styles.item}>
					<NavLink to="/dialogs/7" className={setActive}>
						<span className={styles.text}>Ponchito</span>
					</NavLink>
				</li>
				<li id="8" className={styles.item}>
					<NavLink to="/dialogs/8" className={setActive}>
						<span className={styles.text}>FatChicken</span>
					</NavLink>
				</li>
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