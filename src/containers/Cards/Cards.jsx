import React, { Component } from "react";
// import data from "../../static/data/data";
import styles from "./Cards.module.scss";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import { firestore } from "../../firebase";

class Cards extends Component {
  state = {
    cards: [],
    searchText: "",
    filteredList: []
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
        // Initially set filtered list equal to the cards pulled from the database
        this.setState({
          cards: cards,
          filteredList: cards
        });
      });
  }

  setSearchText = event => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filterCards);
  };

  // Important to keep the original list intact and filter that against new criteria
  filterCards = () => {
    let filteredList = this.state.cards.filter(card => {
      const ar = Object.values(card).filter(str => {
        if (typeof str == "string") {
          return str.toLowerCase().includes(this.state.searchText.toLowerCase());
        }
        return false;
      });
      return ar.length > 0 ? true : false;
    });

    // setState filteredList is shorthand for filterList: filteredList
    this.setState({ filteredList });
  };

  render() {
    return (
      <>
        {/* SearchBar component takes in both the current state and a reference to the setState function */}
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
        {/* onClick of .cards section closeMenu function passed in as props is
        called */}
        <section className={styles.cards}>
          {/* map data array out to instances of card comp. 
            nologist referes to an individual data object & index 
            is the current position in the loop */}

          {/* pass the addSelectedCard fn to Card */}
          {this.state.filteredList.map(nologist => (
            <Card selectCard={this.addSelectedCard} cardData={nologist} key={nologist.docId} />
          ))}
        </section>
      </>
    );
  }
}

export default Cards;
