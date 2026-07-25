import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import todoReducer from "./todo-reducer";
import pomodoroReducer from "./pomodoro-reducer";
import authReducer from "./auth-reducer";


//* combineReducers(...) - функция из Redux, которая объединяет несколько reducer в один
const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarPage: sidebarReducer,
	usersPage: usersReducer,
	musicPage: musicReducer,
	newsPage: newsReducer,
	todoPage: todoReducer,
	pomodoroPage: pomodoroReducer,
	auth: authReducer,
})
const store = createStore(reducers);

window.store = store;

export default store;



//! Современный способ
//*  Redux Toolkit и современный подход
//* В последние годы команда Redux рекомендует использовать Redux Toolkit (RTK) -
//* — официальную библиотеку, которая упрощает работу с Redux и содержит современные API.
//* npm install @reduxjs/toolkit - чтобы подключить
// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// const reducers = combineReducers({
// 	profilePage: profileReducer,
// 	dialogsPage: dialogsReducer,
// 	sidebarPage: sidebarReducer,
// });
//
// const store = configureStore({
// 	reducer: reducers,
// });
//
// export default store;
