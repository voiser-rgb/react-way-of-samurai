import React from "react";
import styles from "./Pomodoro.module.css";
const Pomodoro = () => {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Timer:</h2>
			<div className={styles.wrapper}>
				<div className={styles.timer}>
					<time id="pomo-timer" className="pomo-timer">
						<h3 className={styles.number}>25:00</h3>
					</time>
				</div>
				<div className={styles.controls}>
					<button className="pomo-btn pomo-btn--start">Start</button>
					<button className="pomo-btn pomo-btn--pause" disabled>Pause</button>
					<button className="pomo-btn pomo-btn--reset">Reset</button>
				</div>
			</div>

		</section>
	)
}

export default Pomodoro;