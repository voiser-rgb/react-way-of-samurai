import React from "react";
import styles from "./Settings.module.css";
const Settings = () => {
	return (
		<div className={styles.settings}>
			<h1 className={styles.title}>Settings</h1>
			<section id={styles.profile}>
				<form>
					<h2>Profile Settings</h2>
					<div className={styles.row}>
						<div className={styles.username}>
							<label htmlFor="wrapper-username">Name:</label>
							<input type="text" id="username" name="username"/>
						</div>
						<div className={styles.email}>
							<label htmlFor="email">Email:</label>
							<input type="email" id="email" name="email"/>
						</div>
					</div>
					<div className={styles.row}>
						<button className={styles.btn} type="submit">save</button>
					</div>

				</form>
			</section>
			<section id={styles.security}>
				<h2>Security Settings</h2>
				<form>
					<label htmlFor="password">New Password:</label>
					<input type="password" id="password" name="password"/>

					<label htmlFor="confirm-password">Confirm Password:</label>
					<input type="password" id="confirm-password" name="confirm-password"/>

					<button type="submit">Update Password</button>
				</form>
			</section>
			<section id={styles.notifications}>
				<h2>Notification Settings</h2>
				<form>
					<label>
						<input type="checkbox" name="email-notifications"/> Receive email notifications
					</label>
					<label>
						<input type="checkbox" name="push-notifications"/> Receive push notifications
					</label>

					<button type="submit">Save Settings</button>
				</form>
			</section>


		</div>
	)
}

export default Settings;
