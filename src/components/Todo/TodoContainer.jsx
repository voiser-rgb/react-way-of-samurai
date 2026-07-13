import React from "react";
import {addTask, onCompleteTask, onDeleteTask, upNewTodoText} from "../../redux/todo-reducer";
import Todo from "./Todo";
import {connect} from "react-redux";


// http://localhost:3000/todos
// https://social-network.samuraijs.com/api/1.0/users


// const TodoContainer = (props) => {
// 	const state= props.store.getState();
// 	const dispatch= props.store.dispatch.bind(props.store);
//
// 	const addTask = () => {
// 		dispatch(addTaskAC());
// 	}
//
//
// 	const upNewTodoText = (text) => {
// 		const action = upNewTodoTextAC(text)
// 		dispatch(action);
// 	}
//
//
// 	//* Функция удаления задачи
// 	const onDeleteTask = (id) => {
// 		dispatch(deleteTaskAC(id));
// 		}
//
// 	//* Функция выполнения задачи
// 	const onCompleteTask = (id) => {
// 		dispatch(completeTaskAC(id));
// 	}
//
// 	return (<Todo addTask={addTask}
// 				  upNewTodoText={upNewTodoText}
// 				  state={state.todoPage}
// 				  onDeleteTask = {onDeleteTask}
// 				  onCompleteTask = {onCompleteTask}/>)
// }
//


fetch('https://social-network.samuraijs.com/api/1.0/users')
	.then(res => {
		return res.json()
	})
	.then((json) => {return json.items})
	.then((items) => {
		items.map((item) => {

		})
	})
const mapStateToProps = (state) => {
	return {
	todoPage: state.todoPage,
	}
}


// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addTask: () => dispatch(addTaskAC()),
// 		upNewTodoText: text => dispatch(upNewTodoTextAC(text)),
// 		onDeleteTask: id => dispatch(deleteTaskAC(id)),
// 		onCompleteTask: id => dispatch(completeTaskAC(id)),
// 	}
// }



const TodoContainer = connect(mapStateToProps, {
	addTask,
	upNewTodoText,
	onDeleteTask,
	onCompleteTask
}) (Todo)

export default TodoContainer;
