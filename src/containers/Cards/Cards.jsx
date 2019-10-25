import React, { Component } from "react";
import data from "../../static/data/data";
import styles from "./Cards.module.scss";
import Card from "../../components/Card";

class Cards extends Component {
  render() {
    return (
      <section className={styles.cards}>
        {/* map data array out to instances of card comp. 
            nologist referes to an individual data object & index 
            is the current position in the loop */}

        {data.map((nologist, index) => (
          <Card cardData={nologist} key={index} />
        ))}
      </section>
    );
  }
}

export default Cards;
