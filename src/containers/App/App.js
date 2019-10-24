import React from "react";
import styles from "./App.module.scss";
import Card from "../../components/Card";

function App() {
  return (
    <main>
      <header className={styles.appHeader}>
        <h1>_nology Top Trumps</h1>
      </header>
      <Card />
    </main>
  );
}

export default App;
