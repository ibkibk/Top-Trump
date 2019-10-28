import React, { Component } from "react";
import styles from "./Card.module.scss";
import Skills from "./Skills";
import { cardTypes } from "./propTypes";

// Class containing JSX & methods associated with the card component

class Card extends Component {
  // Function check the length of the card's description & either returns it whole or shortened
  getDescription = () => {
    const description = this.props.cardData.description;
    return description.length > 120 ? description.substring(0, 120) + "..." : description;
  };

  // object containing any properties related to component state
  state = {
    isFaceUp: true
  };

  // setState allows us to update state indirectly
  handleClick = () => {
    this.setState({
      isFaceUp: !this.state.isFaceUp
    });
  };

  // Stops function call when card is in compare cards and no select card fn is passed in
  selectCard = () => {
    return this.props.selectCard ? this.props.selectCard(this.props.cardData) : null;
  };

  /*
    render function describes what the UI will look like using JSX.
  */

  render() {
    const rotateStyle = this.state.isFaceUp ? "" : styles.cardRotated;
    return (
      // Add onClick calling seletCard fn in props
      <div className={styles.scene} onClick={() => this.selectCard()}>
        <article onClick={this.handleClick} className={`${styles.card} ${rotateStyle}`}>
          <div className={styles.cardFront}>
            <h3>{this.props.cardData.name}</h3>

            <div className={styles.topSection}>
              <section className={styles.description}>{this.getDescription()}</section>

              <img
                className={styles.picture}
                alt={this.props.cardData.name + "'s face"}
                src={this.props.cardData.picture}
              />
            </div>

            <Skills skills={this.props.cardData.skills} />
          </div>
          <div className={styles.cardBack} />
        </article>
      </div>
    );
  }
}

Card.propTypes = cardTypes.isRequired;

export default Card;
