import Music from "./Music";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		musicPage: state.musicPage,
	}
}

const MusicContainer = connect(mapStateToProps)(Music);

export default MusicContainer;