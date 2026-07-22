import React from 'react';
import Header from "./Header";
import axios from "axios";

class HeaderContainer extends React.Component {

	// componentDidMount() {
	// 	console.log("componentDidMount: ", this.props.location);
	// 	axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
	// 		this.props.toggleIsFetching(false);
	// 		this.props.setUsers(response.data.items);
	// 		this.props.setTotalUsersCount(response.data.totalCount); //* берем с сервера кол-во users и устанавливаем у свойства totalCount новое значение
	// 	})
	// }

	render() {
		return <Header {...this.props} />
	}

}

export default HeaderContainer;