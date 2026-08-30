import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
	getUsersThunkCreator, followThunkCreator, unfollowThunkCreator, getUsersStatisticsThunkCreator
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

//! Посмотри у тебя работает валидация страниц функционал, а отображение текущий страницы нет
//! Посмотри именование Thunk как лучше назвать

class UsersContainer extends React.Component {
	componentDidMount() {
		console.log('Компонент смонтирован в DOM');
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
	}


	onPageChanged = (pageNumber) => {
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
	}

	followUser = (userId) => {
		this.props.followThunkCreator(userId);
	}

	unfollowUser = (userId) => {
		this.props.unfollowThunkCreator(userId);
	}

	getUsersStatistics = async () => {
		const statistics = await this.props.getUsersStatisticsThunkCreator();
		statistics.forEach((item) => {
			console.log(`Рост: +${item.newUsersGrowth}`);
			console.log(`Всего пользователей добавлено за все время: ${item.totalAdded}`);
		});
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
															   followingInProgress={this.props.followingInProgress}
															   isStatisticsFetching={this.props.isStatisticsFetching}/>}
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
		usersStatistics: state.usersPage.usersStatistics,
		isStatisticsFetching: state.usersPage.isStatisticsFetching,
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
	getUsersThunkCreator,
	followThunkCreator,
	unfollowThunkCreator,
	getUsersStatisticsThunkCreator
})(UsersContainer);
export default MyUsersContainer;