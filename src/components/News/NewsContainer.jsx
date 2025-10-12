import News from "./News";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		newsPage: state.newsPage,
	}
}

const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;