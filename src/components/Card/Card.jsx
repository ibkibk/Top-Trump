import React, { Component } from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";

// Class containing JSX & methods associated with the card component

class Card extends Component {
  // Function check the length of the card's description & either returns it whole or shortened
  getDescription = () => {
    const description = this.props.cardData.description;
    return description.length > 120
      ? description.substring(0, 120) + "..."
      : description;
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

  /*
    render function describes what the UI will look like using JSX.
  */

  render() {
    const rotateStyle = this.state.isFaceUp ? "" : styles.cardRotated;
    return (
      <div className={styles.scene}>
        <article
          onClick={this.handleClick}
          className={`${styles.card} ${rotateStyle}`}
        >
          <div className={styles.cardFront}>
            <h3>{this.props.cardData.name}</h3>
            <div className={styles.topSection}>
              <section className={styles.description}>
                {this.getDescription()}
              </section>
              <img
                className={styles.picture}
                alt={this.props.cardData.name + "'s face"}
                src={this.props.cardData.picture}
              />
            </div>
            <table className={styles.skills}>
              <tbody>
                <tr>
                  <th>Loudness</th>
                  <td>{this.props.cardData.skills.loudness}</td>
                </tr>
                <tr>
                  <th>Greed</th>
                  <td>{this.props.cardData.skills.greed}</td>
                </tr>
                <tr>
                  <th>Attitude</th>
                  <td>{this.props.cardData.skills.attitude}</td>
                </tr>
                <tr>
                  <th>Sass</th>
                  <td>{this.props.cardData.skills.sass}</td>
                </tr>
                <tr>
                  <th>MVP</th>
                  <td>{this.props.cardData.skills.mvp}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.cardBack} />
        </article>
      </div>
    );
  }
}

// Using propTypes to define the data types for the 'skills' object

const skillsTypes = PropTypes.shape({
  loudness: PropTypes.number.isRequired,
  greed: PropTypes.number.isRequired,
  attitude: PropTypes.number.isRequired,
  sass: PropTypes.number.isRequired,
  mvp: PropTypes.number.isRequired
});

// Using propTypes to define the data types for
// the props object passed to the card component

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    skills: skillsTypes
  })
};

export default Card;
