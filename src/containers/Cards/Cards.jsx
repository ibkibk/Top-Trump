import React, { Component } from "react";
import styles from "./Cards.module.scss";
import Card from "../../components/Card";
import { firestore } from "../../firebase";

class Cards extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    // Use Firebase SDK, firestore object, to fetch collection of top trump cards
    // onSnapshot() watches the collection in the db & listens for changes
    firestore
      .collection("top-trump-cards")
      .get()
      .then(querySnapshot => {
        // cards becomes an array of objects returned from the collection
        const cards = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id }; // Need to get each document id and add to card object
        });

        // setting cards in component state equal to data in collection
        this.setState({
          cards: cards
        });
      });
  }

  render() {
    return (
      <section className={styles.cards}>
        {/* map data array out to instances of card comp. 
            nologist referes to an individual data object & index 
            is the current position in the loop */}

        {this.state.cards.map((nologist, index) => (
          <Card cardData={nologist} key={index} />
        ))}
      </section>
    );
  }
}

export default Cards;
