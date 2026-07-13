import {randomId} from "./store";

const ADD_TASK = "ADD_TASK";
const UPDATE_NEW_TODO_TEXT = "UPDATE_NEW_TODO_TEXT";
const DELETE_TASK = "DELETE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";


//* todoPage:
const initialState = {
	todos: [{id: randomId(), number: 1, text: "Buy groceries for next week", completed: false,}, {
		id: randomId(), number: 2, text: "Check the task", completed: true,
	}, {id: randomId(), number: 3, text: "Walk the dog", completed: false,}], newTodoText: "",
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			if (state.newTodoText.trim() === "") return state;
			const todoItem = {
				id: randomId(),
				number: state.todos.length + 1,
				text: state.newTodoText,
				completed: false,
			};

			return {
				...state,
				//* С помощью spread-оператора мы создаём новый массив: копируем старые элементы и добавляем новый объект в начало массива.
				todos: [todoItem, ...state.todos],
				newTodoText: "",
			}
		case UPDATE_NEW_TODO_TEXT:
			return {
				...state,
				newTodoText: action.text
			}
		case DELETE_TASK:
			return {
				...state,
				todos: [...state.todos.filter(item => item.id !== action.id)]
			}
		case COMPLETE_TASK:
			return {
				...state,
				todos: state.todos.map((todo) => todo.id === action.id ?
					{...todo, completed: !todo.completed} : todo)
			}
		default:
			return state;
	}
}

export const addTask = () => ({type: ADD_TASK})
export const upNewTodoText = (text) => ({type: UPDATE_NEW_TODO_TEXT, text})

export const onDeleteTask = (id) => ({type: DELETE_TASK, id})
export const onCompleteTask = (id) => ({type: COMPLETE_TASK, id})


export default todoReducer;