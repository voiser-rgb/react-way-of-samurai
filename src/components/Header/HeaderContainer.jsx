import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserThunk} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserThunk()
	}

	render() {
		return <Header isAuth={this.props.isAuth}
					   login={this.props.login}
					   email={this.props.email}/>
	}

}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	email: state.auth.email,
})
export default connect(mapStateToProps, {getAuthUserThunk}) (HeaderContainer);