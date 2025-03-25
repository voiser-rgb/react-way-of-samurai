import React from "react";
import styles from "./Settings.module.css";

const Settings = () => {
	return (<div className={styles.settings}>
		<h2 className={styles.title}>Settings</h2>
		<section id={styles.profile}>
			<form>
				<h3>Profile Settings</h3>
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
			<h3>Security Settings</h3>
			<form>
				<label htmlFor="password">New Password:</label>
				<input type="password" id="password" name="password"/>

				<label htmlFor="confirm-password">Confirm Password:</label>
				<input type="password" id="confirm-password" name="confirm-password"/>

				<button type="submit">Update Password</button>
			</form>
		</section>
		<section id={styles.notifications}>
			<h3>Notification Settings</h3>
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
	</div>)
}

export default Settings;
