import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/anonymous .png"

const Users = (props) => {
	console.log(props.users);
	if (props.users.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
			props.setUsers(response.data.items);
		})
		// props.setUsers(
		// 	[
		// 	{
		// 		id: 1,
		// 		photoUrl: "https://www.kino-teatr.ru/acter/album/7453/649586.jpg",
		// 		followed: false,
		// 		fullName: "Andrey",
		// 		status: "Just do it!",
		// 		location: {country: "Russia", city: "Moscow"}
		// 	}, {
		// 		id: 2,
		// 		photoUrl: "https://vz.ua/static/image/big/1390848957.jpg",
		// 		followed: true,
		// 		fullName: "Alex",
		// 		status: "We're all friends.",
		// 		location: {country: "USA", city: "New-York"}
		// 	}, {
		// 		id: 3,
		// 		photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Feszty_%C3%81rp%C3%A1d_%C3%81rp%C3%A1d_vez%C3%A9r.jpg/330px-Feszty_%C3%81rp%C3%A1d_%C3%81rp%C3%A1d_vez%C3%A9r.jpg",
		// 		followed: false,
		// 		fullName: "Árpád",
		// 		status: "I am hungry",
		// 		location: {country: "Hungary", city: "Budapest"}
		// 	},
		// ]);
	}
	return (<div className={styles.wrapper}>
		{props.users.map((user) => <div className={styles.item} key={user.id}>
			{/*Блок для Аватара и для кнопки Followed*/}
			<div className={styles.userBlock}>
				<div>
					<img className={styles.photo} src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"/>
				</div>
				{user.followed ? <button onClick={() => {
					props.unfollow(user.id)
				}}>unFollow</button> : <button onClick={() => {
					props.follow(user.id)
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
		<div className={styles.btnWrapper}><button className={styles.btn}>Show more</button></div>
	</div>);
}
export default Users;