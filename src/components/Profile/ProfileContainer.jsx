import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		if(!this.props.userId) {
			this.props.userId = 2;
		}

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`).then((response) => {
			this.props.setUserProfile(response.data);
		})
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWrapper);