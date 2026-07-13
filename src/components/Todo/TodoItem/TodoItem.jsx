import React from "react";
import styles from "./TodoItem.module.css";
import dialogs from "../../Dialogs/Dialogs";


const TodoItem = (props) => {
	//* Функция удаления задачи
	const deleteTask = () => {
		//! когда будут хуки попробуй поменять на них в самом redux нет useConfirm() сделай его сам!
		const confirmed = window.confirm("Are you sure you want to delete this task?");
		if (confirmed) {
			props.onDelete(props.id)
		}}
	//* Функция выполнения задачи
	const completeTask = () => {
		props.onComplete(props.id);
	}
	return (<>
		<li className={styles.item}>
			<span>{props.number}</span>
			<span>{props.text}</span>
			<span>{props.completed ? "Finished" : "in progress" }</span>
			<span className={styles.groupBtn}>
				<button className={`${styles.btn} ${styles.delete}`} onClick={deleteTask} type="button">Delete</button>
				<button className={styles.btn} onClick={completeTask} type="button">Finished</button>
			</span>
		</li>

	</>)
}

export default TodoItem;

