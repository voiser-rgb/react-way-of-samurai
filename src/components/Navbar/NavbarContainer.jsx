import React from 'react';
import Navbar from "./Navbar";
import styles from "./Navbar.module.css";
import StoreContext from "../../StoreContext";



const NavbarContainer = () => {
	const setActive = ({isActive}) => isActive ? styles.active : "";

	return <StoreContext.Consumer>
		{(store) => {
			const state = store.getState().sidebarPage;
			return (<Navbar setActive={setActive} sidebarPage={state}/>)
		}}
	</StoreContext.Consumer>


}

export default NavbarContainer;