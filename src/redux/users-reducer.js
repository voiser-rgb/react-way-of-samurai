
//* Actions type
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const SET_USERS_STATISTICS = "SET_USERS_STATISTICS";
const TOGGLE_IS_STATISTICS_FETCHING = 'TOGGLE_IS_STATISTICS_FETCHING';

//* initialState(начальное состояние) - используется при первом вызове reducer
//* Чтобы state не был undefined и содержал исходные данные
const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
	usersStatistics: [],
	isStatisticsFetching: false,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.userId ?
						{...user, followed: true}
						: user),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.userId ?
						{...user, followed: false} :
						user),
			}
		case SET_USERS:
			return {
				...state, users: [...action.users],
			};
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPage,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state, totalUsersCount: action.totalCount,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching,
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFollowing ?
					[...state.followingInProgress, action.userId] :
					state.followingInProgress.filter(id => id !== action.userId),
			}
			case SET_USERS_STATISTICS:
			return {
				...state,
				usersStatistics: [...action.statistics],
			}
			case TOGGLE_IS_STATISTICS_FETCHING:
			return {
				...state,
				isStatisticsFetching: action.isFetching,
			}
		default:
			return state;
	}
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId});
export const  setUsersStatistics = (statistics) => ({type: SET_USERS_STATISTICS, statistics});
export const  toggleIsStatisticsFetching = (isFetching) => ({type: TOGGLE_IS_STATISTICS_FETCHING, isFetching});


//* Thunk
export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then((data) => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount)); //* берем с сервера кол-во users и устанавливаем у свойства totalCount новое значение
			})
	}
}

export const followThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		//* HTTP-запрос: подписаться на пользователя
		usersAPI.follow(userId)
			.then((data) => {
				if (data.resultCode === 0){
					//* После успешного ответа сервера меняем Redux state
					dispatch(follow(userId))
				}
				dispatch(toggleFollowingProgress(false, userId));
			})
	}
}
export const unfollowThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		//* HTTP-запрос: подписаться на пользователя
		usersAPI.unfollow(userId)
			.then((data) => {
				if (data.resultCode === 0){
					//* После успешного ответа сервера меняем Redux state
					dispatch(unfollow(userId))
				}
				dispatch(toggleFollowingProgress(false, userId));
			})
	}
}


//* getUsersStatisticsThunkCreator
export const getUsersStatisticsThunkCreator = () => {
	return async(dispatch) => {
		try {
			dispatch(toggleIsStatisticsFetching(true));
			const statistics =  await usersAPI.getUsersStatistics();
			dispatch(setUsersStatistics(statistics));
			return statistics;
		} catch(error) {
			console.error("Ошибка при получении статистики:", error);
		} finally {
			dispatch(toggleIsStatisticsFetching(false));
		}
	}
}


export default usersReducer;