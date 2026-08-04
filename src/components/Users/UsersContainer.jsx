import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
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

	follow = (userId) => {
		usersAPI.follow(userId)
			.then((data) => {
				if (data.resultCode === 0){
					console.log("inside container component follow: ", data);
					this.props.follow(userId)
				}
			})
	}

	unfollow = (userId) => {
		usersAPI.unfollow(userId)
			.then((data) => {
				if (data.resultCode === 0){
					this.props.unfollow(userId)
				}
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
															   follow={this.follow}
															   unfollow={this.unfollow}
															   getUsersStatistics={this.getUsersStatistics}/>}
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



//* Возвращаем функции которые отвечают за действие
const MyUsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer);
export default MyUsersContainer;