import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/anonymous.png"
import {NavLink} from "react-router-dom";
import {toggleFollowingProgress} from "../../redux/users-reducer";

const Users = (props) => {
	const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
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
			<button className={styles.btn} onClick={props.getUsersStatistics}>Statistic</button>
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
					<button className={styles.btn} disabled={props.followingInProgress.some((id) => id === user.id)}
							onClick={() => {
						props.unfollowUser(user.id)
								console.log("followingInProgress: " ,props.followingInProgress, user.id)}
					}>unFollow</button>
					: <button className={styles.btn} disabled={props.followingInProgress.some((id) => id === user.id)}
							  onClick={() => {
						props.followUser(user.id)
								  console.log("followingInProgress: " ,props.followingInProgress)}
					}>Follow</button>
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