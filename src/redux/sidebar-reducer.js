import avatar from ".././assets/images/сhaosSpaceMarineMiko.png"

const initialState = {
		friends: [{
			id: 1,
			name: "Andrey",
			avatar: avatar,
		}, {
			id: 2,
			name: "Carl",
			avatar: "https://breeds-info.ru/photo/siba-f2.jpg"
		}, {
			id: 3,
			name: "Lapov",
			avatar: "https://avatars.mds.yandex.net/i?id=8806de9b11e0889da39fd9a4076eb9e1_l-4902967-images-thumbs&n=13"
		},],
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;