import React from 'react';
import preloader from "./../../../assets/images/preloader.svg"
import preloaderOrbit from "./../../../assets/images/reloaderOrbit.svg"
import preloaderMultiple from "./../../../assets/images/spinnerMultiple.svg"
import styles from "./Preloader.module.css"

const Preloader = (props) => (<div className={styles.wrapperPreloader}>
	<img className={styles.imgPreloader} src={preloaderMultiple} alt="preloader"/>
</div>)

export default Preloader;
