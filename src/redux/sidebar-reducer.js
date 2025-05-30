const initialState = {
		friends: [{
			id: 1,
			name: "Andrey",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg"
		}, {
			id: 2,
			name: "Carl",
			avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Linder_M.jpg/500px-Linder_M.jpg"
		}, {
			id: 3,
			name: "Lapov",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5pisyDSGhZGdYcVd1gYVZ4ZrKdlIAwgk2A&s"
		},],
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;