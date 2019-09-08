import React, { Component } from "react"
import styles from "../card.module.css"

class CharacterCard extends Component {
	render() {
		return (
            <div>
                <h1 className={styles.card__title}>{this.props.character.name}</h1>
                <h5 className={styles.card__subtitle}>Homeworld:  <span className={styles.card__copy}>{this.props.character.homeworld ? this.props.character.homeworld.name : "Not Specified"}</span></h5>
                <h5 className={styles.card__subtitle}>Species:  <span className={styles.card__copy}>{this.props.character.species.length > 0 ? this.props.character.species[0].name : "Not Specified"}</span></h5>
                <h5 className={styles.card__subtitle}>Birth year: <span className={styles.card__copy}>{this.props.character.birthYear}</span></h5>
                <h5 className={styles.card__subtitle}>Height: <span className={styles.card__copy}> {this.props.character.height}</span> </h5>
                <h5 className={styles.card__subtitle}>Eye Colour: <span className={styles.card__copy}> {this.props.character.eyeColor} </span></h5>
                <h5 className={styles.card__subtitle}>Starships:</h5>
                <ul className={styles.card__list}>
                    {this.props.character.starships.map((starship, index) => {
                        return <li key={index} className={styles.card__listitem}>{starship.name}</li>
                    })}
                </ul>
            </div>
		)
	}
}

export default CharacterCard;