import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/anonymous .png"

// import {useState} from "react";


class Users extends React.Component {
	componentDidMount() {
		console.log('Компонент смонтирован в DOM');
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		})
	}

	onPageChange(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
			this.props.setUsers(response.data.items);
		})
	}

	render() {
		const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		const pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i)
		}

		{/*!test */}
		// вычисляем диапазон отображаемых страниц
		const portionSize = 10; // показываем только 10 страниц одновременно
		const { currentPage } = this.props;
		const start = Math.max(1, currentPage - 4);
		const end = Math.min(pageCount, start + portionSize - 1);
		const visiblePages = pages.slice(start - 1, end);
		{/*!test */}

		return (<div className={styles.wrapper}>
			<div className={styles.wrapperPage}>

				{/*!test */}
				{start > 1 && (
					<>
						<span onClick={() => this.onPageChange(1)}>1</span>
						<span>...</span>
					</>
				)}
				{/*!test */}

				{visiblePages.map((page) => (
					<span  key={page}
						   className={this.props.currentPage === page ? styles.selectedPage : ""}
						   onClick={() => {this.onPageChange(page)
					}}>{page}</span>))}

				{/*!test */}
				{end < pageCount && (
					<>
						<span>...</span>
						<span onClick={() => this.onPageChange(pageCount)}>{pageCount}</span>
					</>
				)}
				{/*!test */}

			</div>
			{this.props.users.map((user) => <div className={styles.item} key={user.id}>
				{/*Блок для Аватара и для кнопки Followed*/}
				<div className={styles.userWrapper}>
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
				<button onClick={()=> {
					console.log("click Show more")}} className={styles.btn}>Show more</button>
			</div>
		</div>);
	}
}

export default Users;