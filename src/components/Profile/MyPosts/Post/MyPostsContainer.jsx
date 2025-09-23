import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./../MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			const action = addPostActionCreator(); // Function return object - {type: ADD_POST};
			dispatch(action);
		}, updateNewPostText: (text) => {
			const action = updateNewPostActionCreator(text);
			dispatch(action);
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;