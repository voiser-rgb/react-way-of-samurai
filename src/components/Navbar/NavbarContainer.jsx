import Navbar from "./Navbar";
import {connect} from "react-redux";



// const NavbarContainer = () => {
// 	const setActive = ({isActive}) => isActive ? styles.active : "";
//
// 	return <StoreContext.Consumer>
// 		{(store) => {
// 			const state = store.getState().sidebarPage;
// 			return (<Navbar setActive={setActive} sidebarPage={state}/>)
// 		}}
// 	</StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
	return {
		sidebarPage: state.sidebarPage,
	}
}

// const setActive = () => {
// 	return {
// 		active: ({isActive}) => isActive ? styles.active : "",
// 	}
// }
// const setActive = () => ({isActive}) => isActive ? styles.active : "";
const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;