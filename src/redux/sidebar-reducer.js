const initialState = {
		friends: [{
			id: 1,
			name: "Andrey",
			avatar: "https://sun1-96.userapi.com/s/v1/if2/7MEhze88smBtxG_IOXZicdqgObdIPfm-bL2iXGPKfbcDgrBWOaAgO_Qhp9--ohvIw5bvMMvQc3hwYZaP8X7_6yPP.jpg?quality=96&crop=109,108,861,861&as=50x50,100x100,200x200,400x400&ava=1&u=hgeXSJsZdmm4p9M178oWMXTcBhe1smedlgJatVDLvk4&cs=100x100"
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