import React from "react";
// import Users from "./Users";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/users-reducer";

//* Получение конкретных данных которые нам нужны
const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	}
}

//* Возвращаем функции которые отвечают за действие
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => dispatch(followAC(userId)),
		unfollow: (userId) => dispatch(unfollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users)),
	}
}

const MyUsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default MyUsersContainer;