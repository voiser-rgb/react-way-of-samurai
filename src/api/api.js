import axios from 'axios'

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'fc1ab77a-68bf-4f18-aa09-76f783abf693'
	}
})

export const localInstance = axios.create({
	baseURL: 'http://localhost:3001/',
})


export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	follow(id){
		return instance.post(`follow/${id}`).then((response) => response.data)
	},
	unfollow(id){
		return instance.delete(`follow/${id}`).then((response) => response.data)
	},
	async getUsersStatistics(){
		// json-server --watch db.json --port 3001
		//* IT-KAMASUTRA SERVER
		const { data } = await instance.get('users')
		//* json-server
		const { data: history } = await localInstance.get('usersStatistics');
		return history.map(({date, totalUsersCountAtDate}) => ({
			date, newUsersGrowth: data.totalCount - totalUsersCountAtDate, totalAdded: data.totalCount
		}));
	}
}

