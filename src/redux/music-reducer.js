//* initialState(начальное состояние) - используется при первом вызове редьюсера
//* Чтобы state не был undefined и содержал исходные данные
const initialState = {
	music: [
		{id: 1, name: "Tool", nameSong: "7empest",album: "10000 Days",dateRelease: 2006, img: "https://rocknation.su/upload/images/albums/3233.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2019%20-%20Fear%20Inoculum/09.%207empest.mp3"},
		{id: 2, name: "Tool", nameSong: "Right in two",album: "10000 Days",dateRelease: 2006,img: "https://rocknation.su/upload/images/albums/3233.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2006%20-%2010000%20Days/10.%20Right%20In%20Two.mp3"},
		{id: 3, name: "Tool", nameSong: "Pneuma", album: "Fear Inoculum",dateRelease: 2019,img: "https://rocknation.su/upload/images/albums/5510.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2019%20-%20Fear%20Inoculum/02.%20Pneuma.mp3"},
		{id: 4, name: "Tool", nameSong: "Schism", album: "Lateralus",dateRelease: 2001,img: "https://cdn-images.dzcdn.net/images/cover/1645f3b192206dc412353b06491290d4/500x500-000000-80-0-0.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2001%20-%20Lateralus/05.%20Schism.mp3"},
		{id: 5, name: "Tool", nameSong: "Sober", album: "Undertow",dateRelease: 1993,img: "https://rocknation.su/upload/images/albums/5495.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/1993%20-%20Undertow/03.%20Sober.mp3"},
	]}


	const musicReducer = (state = initialState, action) => {
		return {
			...state
		};
	}

	export default musicReducer;