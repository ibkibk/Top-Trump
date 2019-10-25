import React from "react";
import styles from "./App.module.scss";
import Cards from "../../containers/Cards";

function App() {
  return (
    <>
      <header className={styles.appHeader}>
        <h1>_nology Top Trumps</h1>
      </header>
      <main>
        <Cards />
      </main>
    </>
  );
}

export default App;
