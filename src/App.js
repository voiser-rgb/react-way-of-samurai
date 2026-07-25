import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import TodoContainer from "./components/Todo/TodoContainer";
import PomodoroContainer from "./components/Pomodoro/PomodoroContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
	return (<div className="app-wrapper terminal">
		<HeaderContainer/>
		<NavbarContainer/>
		<div className="app-wrapper-content">
			<Routes>
				<Route path="/profile/:userId?" element={<ProfileContainer/>}/>
				<Route path="/dialogs" element={<DialogsContainer/>}/>
				<Route path="/dialogs/:id" element={<DialogsContainer/>}/>
				<Route path="/users" element={<UsersContainer/>}/>
				<Route path="/news" element={<NewsContainer/>}/>
				<Route path="/music" element={<MusicContainer/>}/>
				<Route path="/todo" element={<TodoContainer/>}/>
				<Route path="/pomodoro" element={<PomodoroContainer/>}/>

				<Route path="/settings" element={<Settings/>}/>
				<Route path="/friends" element={<Friends/>}/>
			</Routes>
		</div>
	</div>);
};


// * {<></>} способ для того чтобы не создавать обертку
// const App = () => {
// 	return (<>
// 		<Header/>
// 		<NavbarContainer/>
// 		<div className="app-wrapper-content">
// 			<Routes>
// 				<Route path="/profile" element={<ProfileContainer/>}/>
// 				<Route path="/dialogs" element={<DialogsContainer/>}/>
// 				<Route path="/dialogs/:id" element={<DialogsContainer/>}/>
// 				<Route path="/users" element={<UsersContainer/>}/>
// 				<Route path="/news" element={<NewsContainer/>}/>
// 				<Route path="/music" element={<MusicContainer/>}/>
// 				<Route path="/todo" element={<TodoContainer/>}/>
// 				<Route path="/settings" element={<Settings/>}/>
// 				<Route path="/friends" element={<Friends/>}/>
// 			</Routes>
// 		</div>
// 	</>);
// };

export default App;
