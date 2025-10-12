import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";
import NewsContainer from "./components/News/NewsContainer";



const App = () => {
	return (<div className="app-wrapper">
		<Header/>
		<NavbarContainer/>
		<div className="app-wrapper-content">
			<Routes>
				<Route path="/profile" element={<Profile/>}/>
				<Route path="/dialogs" element={<DialogsContainer/>}/>
				<Route path="/dialogs/:id" element={<DialogsContainer/>}/>
				<Route path="/news" element={<NewsContainer/>}/>
				<Route path="/music" element={<MusicContainer/>}/>
				{/*<Route path="/music" element={<Music/>}/>*/}
				<Route path="/settings" element={<Settings/>}/>
				<Route path="/friends" element={<Friends/>}/>
				<Route path="/users" element={<UsersContainer/>}/>
			</Routes>
		</div>
	</div>);
};


//* {<></>} способ для того чтобы не создавать обертку
// const App = () => {
// 	return (
// 		<>
// 			<Header/>
// 			<NavbarContainer/>
// 			<div className="app-wrapper-content">
// 				<Routes>
// 					<Route path="/profile" element={<Profile/>}/>
// 					<Route path="/dialogs" element={<DialogsContainer/>}/>
// 					<Route path="/dialogs/:id" element={<DialogsContainer/>}/>
// 					<Route path="/news" element={<News/>}/>
// 					<Route path="/music" element={<Music/>}/>
// 					<Route path="/settings" element={<Settings/>}/>
// 					<Route path="/friends" element={<Friends/>}/>
// 				</Routes>
// 			</div>
// 		</>);
// };

export default App;
