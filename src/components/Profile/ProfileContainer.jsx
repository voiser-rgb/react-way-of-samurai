import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunk} from "../../redux/profile-reducer"; //
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		// if(!this.props.userId) {
		// 	this.props.userId = 2;
		// }

		const userId = this.props.userId || 2;
		this.props.getUserProfileThunk(userId)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}


const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

function ProfileContainerWrapper(props) {
	const {userId} = useParams();
	return <ProfileContainer {...props} userId={userId}/>;
}

export default connect(mapStateToProps, {getUserProfileThunk})(ProfileContainerWrapper);