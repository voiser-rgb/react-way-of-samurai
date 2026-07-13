import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/anonymous.png"
import {NavLink} from "react-router-dom";

const Users = (props) => {
	const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

	{/*!test */
	}
	// вычисляем диапазон отображаемых страниц
	const portionSize = 10; // показываем только 10 страниц одновременно
	const {currentPage} = props;
	const start = Math.max(1, currentPage - 4);
	const end = Math.min(pageCount, start + portionSize - 1);
	const visiblePages = pages.slice(start - 1, end);
	{/*!test */
	}

	console.log("totalUsersCount - ", props.totalUsersCount);

	return (<div className={styles.wrapper}>
		<div className={styles.wrapperPage}>

			{/*!test */}
			{start > 1 && (<>
				<span onClick={() => props.onPageChanged(1)}>1</span>
				<span>...</span>
			</>)}
			{/*!test */}
			{visiblePages.map((page) => (<span key={page}
											   className={currentPage === page ? styles.selectedPage : ""}
											   onClick={() => {
												   props.onPageChanged(page)
											   }}>{page}</span>))}

			{/*!test */}
			{end < pageCount && (<>
				<span>...</span>
				<span onClick={() => props.onPageChanged(pageCount)}>{pageCount}</span>
			</>)}
			{/*!test */}

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
					<button onClick={() => {props.unfollow(user.id)}}>unFollow</button> :
					<button onClick={() => {props.follow(user.id)}}>Follow</button>}
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
			<button onClick={() => {
				console.log("click Show more", props.isFetching)
			}} className={styles.btn}>Show more
			</button>
		</div>
	</div>);
}

export default Users;