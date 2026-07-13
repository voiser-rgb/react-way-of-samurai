//* initialState(начальное состояние) - используется при первом вызове редьюсера
//* Чтобы state не был undefined и содержал исходные данные
const initialState = {}


const pomodoroReducer = (state = initialState, action) => {
	return {
		...state
	};
}

export default pomodoroReducer;