import React from "react";
import styles from "./Todo.module.css";
import TodoItem from "./TodoItem/TodoItem";


const Todo = (props) => {
	let todos = props.todoPage.todos;
	let newTodoText = props.todoPage.newTodoText;

	let todoElement = todos.map((i,index) => (<TodoItem 	key={i.id} id={i.id}
																 number={index + 1}
																 text={i.text}
																 completed={i.completed}
																 onDelete={props.onDeleteTask}
																 onComplete={props.onCompleteTask} />))


	const onAddTask = (e) => {
		e.preventDefault();
		props.addTask()
	}


	const onTodoChange = (e) => {
		let text = e.target.value;
		props.upNewTodoText(text);
	}

	return (<div className={styles.todo}>
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>To Do List:</h2>

				<form className={styles.form} onSubmit={onAddTask}>
					<div className={styles.inpGroup}>
						<input onChange={onTodoChange}
							   type="text" id="form1"
							   className={styles.input}
							   placeholder="Enter a task here"
							   value={newTodoText}
						/>
					</div>
					<div className={styles.btnGroup}>
						<button className={styles.addBtn} type="submit">Add task
						</button>
					</div>
				</form>

				<ul className={styles.list}>
					<li className={styles.header}>
						<span>No.</span>
						<span>Todo item</span>
						<span>Status</span>
						<span>Actions</span>
					</li>
					{todoElement}
				</ul>
			</div>
		</section>
	</div>)
}

export default Todo;
