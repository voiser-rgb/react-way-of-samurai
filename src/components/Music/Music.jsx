// import React from "react";
// import {useState} from 'react';
// import styles from "./Music.module.css";
//
// class MusicClass extends React.Component {
// 	render() {
// 		return (<section className={styles.music}>
// 			<ol>
// 				<h2 className={styles.title}>Music:</h2>
// 				{/*<p>{this.props.name}:</p>*/}
// 				{this.props.musicPage.music.map((song) => {
// 					return (<li>
// 						<figure className={styles.music__item}>
//
// 							<figcaption>
// 								<img className={styles.img} src={song.img} alt="image"/>
// 							</figcaption>
//
// 							<figcaption className={styles.wrapperInfo}>
// 								<div className={styles.wrapperText}>
// 									<h3 className={styles.subtitle}>{song.name}</h3>
// 									<p className={styles.text}>-{song.nameSong}-</p>
// 								</div>
// 								<audio controls>
// 									<source src={song.audioRef} type="audio/mpeg"/>
// 								</audio>
// 							</figcaption>
//
// 						</figure>
// 					</li>)
// 				})}
// 			</ol>
// 		</section>)
// 	}
// }
//
// export default MusicClass;



import React from "react";
import {useState} from 'react';
import styles from "./Music.module.css";

class Music extends React.Component {
	render() {
		return (<section className={styles.music}>
			<ol>
				<h2 className={styles.title}>Music:</h2>
				{/*<p>{this.props.name}:</p>*/}
				{this.props.musicPage.music.map((song) => {
					return (
						<figure className={styles.music__item}>

							<figcaption>
								<img className={styles.img} src={song.img} alt="image"/>
								<p>{song.album} - ({song.dateRelease})</p>
							</figcaption>

							<li>
								<figcaption className={styles.wrapperInfo}>
									<div className={styles.wrapperText}>
										<h3 className={styles.subtitle}>{song.name}</h3>
										<p className={styles.text}>-{song.nameSong}-</p>
									</div>
									<audio controls>
										<source src={song.audioRef} type="audio/mpeg"/>
									</audio>
								</figcaption>
							</li>

						</figure>
					)
				})}
			</ol>
		</section>)
	}
}

export default Music;
