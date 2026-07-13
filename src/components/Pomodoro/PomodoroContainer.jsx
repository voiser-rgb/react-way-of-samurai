import Pomodoro from "./Pomodoro";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		pomodoroPage: state.pomodoroPage,
	}
}

const PomodoroContainer = connect(mapStateToProps)(Pomodoro);

export default PomodoroContainer;
