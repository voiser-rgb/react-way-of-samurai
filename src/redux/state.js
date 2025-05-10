let store = {

	_callSubscriber() {
		console.log("Not subscribe!");
	},

	//* Данные
	_state: {
		profilePage: {
			posts: [{
				id: 1,
				message: "Hi",
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
				likes: 10
			}, {
				id: 2,
				message: "It's my first post",
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
				likes: 15
			}, {
				id: 3,
				message: "How are you dude?",
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
				likes: 20
			},], newPostText: "I'm writing to someone..."
		},

		dialogsPage: {
			dialogs: [{
				id: 1,
				name: "Andrey",
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
			}, {id: 2, name: "Vika", img: "https://shibann.ru/males/blin_akimo/2.jpg",}, {
				id: 3,
				name: "Pavel",
				img: "https://avatars.steamstatic.com/17747087ad49d60f8b5cfb19c3fe88fd62c70ec5_medium.jpg",
			}, {
				id: 4,
				name: "Elena",
				img: "https://i.pinimg.com/originals/19/23/ab/1923abf61f8d9fbeefd0bb91d8e997a9.jpg",
			}, {
				id: 5, name: "FatBot", img: "https://images.genius.com/144774e41a4b0695f389307c91a2604b.749x748x1.jpg",
			}, {
				id: 6,
				name: "LittlePuppy",
				img: "https://i.pinimg.com/736x/5b/21/60/5b2160463292c9bce84fdb4df10a8c0e.jpg",
			}, {
				id: 7,
				name: "Kuzma",
				img: "https://avatars.akamai.steamstatic.com/a2a053943578da804dd6f677a38d6e6d1c38ac3a_medium.jpg",
			}, {
				id: 8, name: "Mikasa", img: "https://pp.userapi.com/c850732/v850732960/5e967/imaJzJkBFnU.jpg?ava=1.jpg",
			},], messages: [{id: 1, text: "Hello my friends"}, {id: 2, text: "Yo"}, {id: 3, text: "Hi"}, {
				id: 4, text: "Hello, how are you?"
			}, {id: 5, text: "Ooo, haven't seen you a long time!"}, {id: 6, text: "Who are you, dude?"}, {
				id: 7, text: "Ahahaha, an interesting situation"
			}, {id: 8, text: "Well, we're glad you're back"},], newMessageText: "I'm writing to someone...",
		},

		sidebar: {
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
	}, //* Получить данные из state
	getState() {
		return this._state;
	}, //* Обновление текста
	updateText(page, value) {
		if (page === "profilePage") {
			this._state.profilePage.newPostText = value;
			this._callSubscriber(this._state);
		} else if (page === "dialogsPage") {
			this._state.dialogsPage.newMessageText = value;
			this._callSubscriber(this._state);
		}
	}, //* Генерация случайного ID для новых постов
	_randomId() {
		const array = new Uint32Array(3);
		crypto.getRandomValues(array);
		return (array[0] * 0x100000000) + array[1];
	}, //* Добавляет новый пост в profilePage
	add(page) {
		if (page === "profilePage") {
			const newPost = {
				id: this._randomId(),
				message: this._state.profilePage.newPostText,
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5NHKBic0zQv_JAq4kkUFenrAQzHqPSRUAg&s.jpg",
				likes: 0,
			}
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);
		} else if (page === "dialogsPage") {
			const newMessage = {
				id: this._randomId(), text: this._state.dialogsPage.newMessageText,
			}
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = "";
			this._callSubscriber(this._state);
		}
	}, //* Устанавливает функцию, которую нужно вызвать при изменении state".
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}


export default store;
window.store = store;
