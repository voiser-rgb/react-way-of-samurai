import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



class UsersContainer extends React.Component {
	componentDidMount() {
		console.log('Компонент смонтирован в DOM');
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then((data) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount); //* берем с сервера кол-во users и устанавливаем у свойства totalCount новое значение
		})
	}


	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);

		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then((data) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		})
	}

	followUser = (userId) => {
		this.props.toggleFollowingProgress(true, userId);
		//* HTTP-запрос: подписаться на пользователя
		usersAPI.follow(userId)
			.then((data) => {
				if (data.resultCode === 0){
					//* После успешного ответа сервера меняем Redux state
					this.props.follow(userId)
				}
				this.props.toggleFollowingProgress(false, userId);
			})
	}

	unfollowUser = (userId) => {
		//* HTTP-запрос: отписаться от пользователя
		this.props.toggleFollowingProgress(true, userId);
		usersAPI.unfollow(userId)
			.then((data) => {
				if (data.resultCode === 0){
					//* После успешного ответа сервера меняем Redux state
					this.props.unfollow(userId)
				}
				this.props.toggleFollowingProgress(false, userId);
			})
	}

	getUsersStatistics = async () => {
		try {
			const statistics =  await usersAPI.getUsersStatistics()

			statistics.forEach((item) => {
				console.log(`Рост: +${item.newUsersGrowth}`);
				console.log(`Всего пользователей добавлено за все время: ${item.totalAdded}`);
			})
		} catch(error) {
			console.error("Ошибка при получении статистики:", error);
		}
	}

	render() {
		return <>
			<div>
				{this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
															   pageSize={this.props.pageSize}
															   currentPage={this.props.currentPage}
															   onPageChanged={this.onPageChanged}
															   users={this.props.users}
															   followUser={this.followUser}
															   unfollowUser={this.unfollowUser}
															   getUsersStatistics={this.getUsersStatistics}
															   toggleFollowingProgress={this.toggleFollowingProgress}
															   followingInProgress={this.props.followingInProgress}/>}
			</div>
		</>
	}
}


//* Получение конкретных данных которые нам нужны
const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}
//* Возвращаем функции которые отвечают за действие
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => dispatch(followAC(userId)),
// 		unfollow: (userId) => dispatch(unfollowAC(userId)),
// 		setUsers: (users) => dispatch(setUsersAC(users)),
// 		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
// 		setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
// 		toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
// 	}
// }

//* mapStateToProps:
//* Redux state → props ( передаёт данные из Redux state в props. )

//* mapDispatchToProps:
//* action creators → dispatch → Redux ( action creators — передаёт действия в props. )

//* Возвращаем функции которые отвечают за действие
const MyUsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress
})(UsersContainer);
export default MyUsersContainer;