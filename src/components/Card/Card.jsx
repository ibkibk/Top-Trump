import React, { Component } from "react";
import craig from "../../static/images/craig.png";
import styles from "./Card.module.scss";

// Class containing JSX & methods associated with the card component

class CardComponent extends Component {
  /*
    render function describes what the UI will look like using JSX.
  */

  render() {
    return (
      <article className={styles.card}>
        <h3>Craig Livings</h3>
        <div className={styles.topSection}>
          <section className={styles.description}>
            Craig is Head of Technology for _nology. He loves rock climbing and
            solving problems. The only problem craig hasn't been able to solve
            is how to climb while leaving his ego on the ground.
          </section>
          <img className={styles.picture} alt="Craig's face" src={craig} />
        </div>
        <table className={styles.skills}>
          <tbody>
            <tr>
              <th>Loudness</th>
              <td>5</td>
            </tr>
            <tr>
              <th>Greed</th>
              <td>7</td>
            </tr>
            <tr>
              <th>Attitude</th>
              <td>8</td>
            </tr>
            <tr>
              <th>Sass</th>
              <td>4</td>
            </tr>
            <tr>
              <th>MVP</th>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
}

export default CardComponent;
