import React from "react";
// import Users from "./Users";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";

//* Получение конкретных данных которые нам нужны
const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	}
}
//* Возвращаем функции которые отвечают за действие
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => dispatch(followAC(userId)),
		unfollow: (userId) => dispatch(unfollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
		setTotalUsersCount: (totalCount) =>dispatch(setTotalUsersCountAC(totalCount))
	}
}
const MyUsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default MyUsersContainer;