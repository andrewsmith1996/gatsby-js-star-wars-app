import FilmCard from './filmCard.js';
import React from "react"
import styles from "../card.module.css"

class FilmList extends React.Component {
	render() {
		const cards = this.props.films.map((film, index) =>
			<li className={styles.film__card} key={film.id} ><FilmCard film={film} /></li>
		);

		return <ul className={styles.cards__container}>{ cards }</ul>;
	}
}

export default FilmList;
