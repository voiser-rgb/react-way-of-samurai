import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
	componentDidMount() {
		console.log('Компонент смонтирован в DOM');
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then((response) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount); //* берем с сервера кол-во users и устанавливаем у свойства totalCount новое значение
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then((response) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
		})
	}

	render() {
		return <>
			<div>
				{this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
															   pageSize={this.props.pageSize}
															   currentPage={this.props.currentPage}
															   onPageChanged={this.onPageChanged}
															   users={this.props.users}
															   follow={this.props.follow}
															   unfollow={this.props.unfollow}/>}
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