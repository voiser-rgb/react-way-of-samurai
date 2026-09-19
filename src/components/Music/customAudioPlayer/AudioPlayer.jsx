import React from "react";
import {useRef, useState} from "react";
import styles from "./AudioPlayer.module.css";


const AudioPlayer = ({src, title}) => {
	const audioRef = useRef(null);
	const progressBarRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const playAudio = () => {
		audioRef.current.play();
	}
	const pauseAudio = () => {
		audioRef.current.pause();
	}

	const resetAudio = () => {
		audioRef.current.currentTime = 0;
		setCurrentTime(0);
	}

	const handleProgressClick = (e) => {
		//* Получаем сам DOM-элемент progressBar
		const progressBar = progressBarRef.current;
		//* Где кликнули внутри полоски
		const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
		//* Полная ширина полоски
		const progressBarWidth = progressBar.clientWidth;

		//* Какой процент полоски был выбран
		const newTime = (clickPosition / progressBarWidth) * duration;
		//* Перемещаем аудио на это время
		audioRef.current.currentTime = newTime;
	}


	const progress = duration ? (currentTime / duration) * 100 : 0;

	return (<div className={styles.player}>
		<div className={styles.title}>
    <span className={styles.trackName}>
        {">> "}`{title}`{" <<"}
    </span>
		</div>

		<div className={styles.time}>
			{currentTime} / {duration}
		</div>

		<div className={styles.controls}>

			<div
				className={styles.progressBar}
				ref={progressBarRef}
				onClick={handleProgressClick}
			>
				<div
					className={styles.progress}
					style={{width: `${progress}%`}}
				/>
			</div>

			<button
				onClick={isPlaying ? pauseAudio : playAudio}
			>
				{isPlaying ? "PAUSE" : "PLAY"}
			</button>

			<button onClick={resetAudio}>
				RESET
			</button>

		</div>

		<audio
			ref={audioRef}
			src={src}
			onPlay={() => setIsPlaying(true)}
			onPause={() => setIsPlaying(false)}
			onEnded={() => setIsPlaying(false)}
			onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
			onLoadedMetadata={(e) => setDuration(e.target.duration)}
		/>
	</div>)
}

export default AudioPlayer;