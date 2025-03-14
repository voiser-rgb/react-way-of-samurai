import React from "react";
import styles from "./News.module.css";
const News = () => {
	return (
		<section className={styles.news}>
			<h2 className={styles.title}>News:</h2>
			<article className={styles.article}>
				<h3 className={styles.subtitle}>Unprecedented X-ray Oscillations</h3>
				Astronomers have detected significant X-ray oscillations near the innermost orbit of the supermassive black hole 1ES 1927+654,
				located about 270 million light-years away15. These oscillations exhibited a rapid change in period,
				decreasing from approximately 18 minutes in 2022 to about 7 minutes in 202415.
				This unprecedented period evolution could potentially be driven by a white dwarf orbiting the supermassive black hole close to its event horizon
			</article>
		</section>
	)
}

export default News;
