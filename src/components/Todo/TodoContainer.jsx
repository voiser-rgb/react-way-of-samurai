import React from "react";
import {addTaskAC, completeTaskAC, deleteTaskAC, upNewTodoTextAC} from "../../redux/todo-reducer";
import Todo from "./Todo";
import {connect} from "react-redux";


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

const mapStateToProps = (state) => {
	return {
	todoPage: state.todoPage,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addTask: () => dispatch(addTaskAC()),
		upNewTodoText: text => dispatch(upNewTodoTextAC(text)),
		onDeleteTask: id => dispatch(deleteTaskAC(id)),
		onCompleteTask: id => dispatch(completeTaskAC(id)),
	}
}



const TodoContainer = connect(mapStateToProps,mapDispatchToProps) (Todo)

export default TodoContainer;
