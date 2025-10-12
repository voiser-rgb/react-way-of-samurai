//* initialState(начальное состояние) - используется при первом вызове редьюсера
//* Чтобы state не был undefined и содержал исходные данные
const initialState = {
	articles: [{
		id: 1,
		subtitle: "Unprecedented X-ray Oscillations",
		content: "Astronomers have detected significant X-ray oscillations near the innermost orbit of the supermassive black hole 1ES 1927+654,\n" + "\t\t\t\tlocated about 270 million light-years away15. These oscillations exhibited a rapid change in period,\n" + "\t\t\t\tdecreasing from approximately 18 minutes in 2022 to about 7 minutes in 202415.\n" + "\t\t\t\tThis unprecedented period evolution could potentially be driven by a white dwarf orbiting the supermassive black hole close to its event horizon",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magnetic_Flip_Drives_Flare-Up_of_Monster_Black_Hole_%28SVS14148_-_CLAGN22Full%29.jpg/500px-Magnetic_Flip_Drives_Flare-Up_of_Monster_Black_Hole_%28SVS14148_-_CLAGN22Full%29.jpg"
	}, {
		id: 2,
		subtitle: "Astronomical Observations Tonight",
		content: "Tonight features a half-lit Moon close to Jupiter and the Orion constellation rising in the southern sky. Observers are encouraged to look before midnight to enjoy this celestial show, including the Saturn Nebula located in Aquarius, which resembles the rings of Saturn.",
		img: "https://biwork.ru/picture/84163/840x468.webp"
	},
		{
			id: 3,
			subtitle: "Major Events and Launches",
			content: "SpaceX is planning the 11th test flight of its reusable Starship rocket on October 13, which will be broadcast live. The company is also continuing to deploy satellites for Amazon's Project Kuiper broadband constellation, now with a total of 153 launched. China’s CAS Space is preparing for its first liquid rocket launch aimed at testing a new cargo spacecraft, highlighting the rapid growth of commercial space in China.",
			img:"https://upload.wikimedia.org/wikipedia/commons/4/4a/SpaceX_Starship_ignition_during_IFT-5.jpg",
		},
	]
}


const newsReducer = (state = initialState, action) => {
	return {
		...state
	};
}

export default newsReducer;