import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/anonymous.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
	const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

// TODO:
//! В будущем вынести статистику:
//! UsersStatisticsContainer - получение данных
//! UsersStatisticsModal - отображение
	async function getUsersStatistics() {
		try {
			// json-server --watch db.json --port 3001

			//* IT-KAMASUTRA SERVER
			const responseSamurai = await fetch("https://social-network.samuraijs.com/api/1.0/users");
			const data = await responseSamurai.json();

			//* json-server
			const response = await fetch("http://localhost:3001/usersStatistics");
			const history = await response.json();


			const statistics = history.map(({date, totalUsersCountAtDate}) => ({
				date, newUsersGrowth: data.totalCount - totalUsersCountAtDate, totalAdded: data.totalCount
			}))
			statistics.forEach((item) => {
				console.log(`Рост: +${item.newUsersGrowth}`);
				console.log(`Всего пользователей добавлено за все время: ${item.totalAdded}`);
			})
		} catch (error) {
			console.error("Ошибка при получении статистики:", error);
		}
	}



	//* вычисляем диапазон отображаемых страниц
	const portionSize = 10; // показываем только 10 страниц одновременно
	const {currentPage} = props;
	const start = Math.max(1, currentPage - 4);
	const end = Math.min(pageCount, start + portionSize - 1);
	const visiblePages = pages.slice(start - 1, end);



	return (<div className={styles.wrapper}>
		<div className={styles.wrapperPage}>

			{start > 1 && (<>
				<span onClick={() => props.onPageChanged(1)}>1</span>
				<span>...</span>
			</>)}

			{visiblePages.map((page) => (<span key={page}
											   className={currentPage === page ? styles.selectedPage : ""}
											   onClick={() => {
												   props.onPageChanged(page)
											   }}>{page}</span>))}


			{end < pageCount && (<>
				<span>...</span>
				<span onClick={() => props.onPageChanged(pageCount)}>{pageCount}</span>
			</>)}
			<button className={styles.btn} onClick={getUsersStatistics}>Statistic</button>
		</div>
		{props.users.map((user) => <div className={styles.item} key={user.id}>
			{/*Блок для Аватара и для кнопки Followed*/}
			<div className={styles.userWrapper}>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img className={styles.photo} src={user.photos.small != null ? user.photos.small : userPhoto}
							 alt="avatar"/>
					</NavLink>
				</div>
				{user.followed ?
					<button onClick={() => {
						axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
							withCredentials: true,
							headers: {
								'API-KEY': 'fc1ab77a-68bf-4f18-aa09-76f783abf693'
							}
						})
							.then((response) => {
								if (response.data.resultCode === 0){
									props.unfollow(user.id)
								}
							})
						}
					}>unFollow</button> :
					<button onClick={() => {
						axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
							withCredentials: true,
							headers: {
								'API-KEY': 'fc1ab77a-68bf-4f18-aa09-76f783abf693'
							}
						})
							.then((response) => {
							if (response.data.resultCode === 0){
								props.follow(user.id)
							}
						})
					}}>Follow</button>
				}
			</div>
			{/*Блок для имени, статуса, страны и города*/}
			<div className={styles.userInfo}>
				{/*Блок для имени и статуса*/}
				<div className={styles.main}>
					<div className={styles.fullName}>{user.name}</div>
					<div className={styles.status}>{user.status}</div>
					<div className={styles.status}>{user.id}</div>
				</div>
				{/*Блок для страны и города*/}
				<div className={styles.location}>
					<div className={styles.country}>user.location.country</div>
					<div className={styles.city}>user.location.city</div>
				</div>
			</div>
		</div>)}
		<div className={styles.btnWrapper}>
			<button onClick={() => {
				console.log("clicked show more");
			}} className={styles.btn}>Show more
			</button>
		</div>
	</div>);
}

export default Users;