//* initialState(начальное состояние) - используется при первом вызове редьюсера
//* Чтобы state не был undefined и содержал исходные данные
// const initialState = {
// 	music: [
// 		{id: 1, name: "Tool", nameSong: "7empest",album: "10000 Days",dateRelease: 2006, img: "https://rocknation.su/upload/images/albums/3233.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2019%20-%20Fear%20Inoculum/09.%207empest.mp3"},
// 		{id: 2, name: "Tool", nameSong: "Right in two",album: "10000 Days",dateRelease: 2006,img: "https://rocknation.su/upload/images/albums/3233.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2006%20-%2010000%20Days/10.%20Right%20In%20Two.mp3"},
// 		{id: 3, name: "Tool", nameSong: "Pneuma", album: "Fear Inoculum",dateRelease: 2019,img: "https://rocknation.su/upload/images/albums/5510.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2019%20-%20Fear%20Inoculum/02.%20Pneuma.mp3"},
// 		{id: 4, name: "Tool", nameSong: "Schism", album: "Lateralus",dateRelease: 2001,img: "https://cdn-images.dzcdn.net/images/cover/1645f3b192206dc412353b06491290d4/500x500-000000-80-0-0.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2001%20-%20Lateralus/05.%20Schism.mp3"},
// 		{id: 5, name: "Tool", nameSong: "Sober", album: "Undertow",dateRelease: 1993,img: "https://rocknation.su/upload/images/albums/5495.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/1993%20-%20Undertow/03.%20Sober.mp3"},
// 	]}


import CaestusMetalican from "../assets/music/warhammer40k/audio/Caestus_Metalican.mp3"
import DanceOftheCryptek from "../assets/music/warhammer40k/audio/Dance_Of_the_Cryptek.mp3"
import ChildrenOfTheOmnissiah from "../assets/music/warhammer40k/audio/Children_of_the_Omnissiah.mp3"
import Noosphere from "../assets/music/warhammer40k/audio/Noosphere.mp3"
import imgAl from "../assets/music/warhammer40k/img/prayToTheMachine.jpg"

const initialState = {
	music: {
		tool: [
		{id: 1, name: "Tool", nameSong: "7empest",album: "10000 Days",dateRelease: 2006, img: "https://rocknation.su/upload/images/albums/3233.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2019%20-%20Fear%20Inoculum/09.%207empest.mp3"},
		{id: 2, name: "Tool", nameSong: "Right in two",album: "10000 Days",dateRelease: 2006,img: "https://rocknation.su/upload/images/albums/3233.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2006%20-%2010000%20Days/10.%20Right%20In%20Two.mp3"},
		{id: 3, name: "Tool", nameSong: "Pneuma", album: "Fear Inoculum",dateRelease: 2019,img: "https://rocknation.su/upload/images/albums/5510.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2019%20-%20Fear%20Inoculum/02.%20Pneuma.mp3"},
		{id: 4, name: "Tool", nameSong: "Schism", album: "Lateralus",dateRelease: 2001,img: "https://cdn-images.dzcdn.net/images/cover/1645f3b192206dc412353b06491290d4/500x500-000000-80-0-0.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/2001%20-%20Lateralus/05.%20Schism.mp3"},
		{id: 5, name: "Tool", nameSong: "Sober", album: "Undertow",dateRelease: 1993,img: "https://rocknation.su/upload/images/albums/5495.jpg", audioRef: "https://rocknation.su/upload/mp3/Tool/1993%20-%20Undertow/03.%20Sober.mp3"},
	],
		warhammer40k: [
			{id: 1, name: "Guillaume David", nameSong: "Caestus_Metalican",album: "Mechanicus",dateRelease: 2020, img: imgAl, audioRef: CaestusMetalican},
			{id: 2, name: "Guillaume David", nameSong: "Dance_Of_the_Cryptek",album: "Mechanicus",dateRelease: 2020, img: imgAl, audioRef: DanceOftheCryptek},
			{id: 3, name: "Guillaume David", nameSong: "Children_of_the_Omnissiah",album: "Mechanicus",dateRelease: 2020, img: imgAl, audioRef: ChildrenOfTheOmnissiah},
			{id: 3, name: "Guillaume David", nameSong: "Noosphere",album: "Mechanicus",dateRelease: 2020, img: imgAl, audioRef: Noosphere},
		]}

}


	const musicReducer = (state = initialState, action) => {
		return {
			...state
		};
	}

	export default musicReducer;