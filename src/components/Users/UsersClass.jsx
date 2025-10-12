import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/anonymous .png"
// import {useState} from "react";


class Users extends React.Component {
	getUsers = () => {
		if (this.props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
				this.props.setUsers(response.data.items);
			})
		}
	}

	handleClick = () => {
		console.log("clicked");
	}

render() {
	return (<div className={styles.wrapper}>
		<button onClick={this.getUsers}>Get users</button>
		{this.props.users.map((user) => <div className={styles.item} key={user.id}>
			{/*Блок для Аватара и для кнопки Followed*/}
			<div className={styles.userBlock}>
				<div>
					<img className={styles.photo} src={user.photos.small != null ? user.photos.small : userPhoto}
						 alt="avatar"/>
				</div>
				{user.followed ? <button onClick={() => {
					this.props.unfollow(user.id)
				}}>unFollow</button> : <button onClick={() => {
					this.props.follow(user.id)
				}}>Follow</button>}
				{/*<button>Follow</button>*/}
			</div>
			{/*Блок для имени, статуса, страны и города*/}
			<div className={styles.userInfo}>
				{/*Блок для имени и статуса*/}
				<div className={styles.main}>
					<div className={styles.fullName}>{user.name}</div>
					<div className={styles.status}>{user.status}</div>
				</div>
				{/*Блок для страны и города*/}
				<div className={styles.location}>
					<div className={styles.country}>user.location.country</div>
					<div className={styles.city}>user.location.city</div>
				</div>
			</div>
		</div>)}
		<div className={styles.btnWrapper}>
			<button onClick={this.handleClick} className={styles.btn}>Show more</button>
		</div>
	</div>);
}
}

export default Users;