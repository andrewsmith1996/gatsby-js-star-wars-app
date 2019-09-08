import React, { Component } from "react"
import styles from "../card.module.css"

class FilmCard extends Component {
		render() {
			return (
				<div>
					<h1 className={styles.card__title}>#{this.props.film.episodeId} - {this.props.film.title}</h1>
					<h5 className={styles.card__subtitle}>Release Date: <span className={styles.card__copy}>{new Date(this.props.film.releaseDate).toLocaleDateString("en-US")}</span></h5>
					<h5 className={styles.card__subtitle}>Director: <span className={styles.card__copy}>{this.props.film.director}</span></h5>
					<h5 className={styles.card__subtitle}>Opening Crawl: <span className={styles.card__copy}>{this.props.film.openingCrawl}</span></h5>
				</div>
		)
	}
}

export default FilmCard;