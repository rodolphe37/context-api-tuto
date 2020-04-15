import React from "react";
import User from "./components/User";
import './App.css'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <div className="App-header">
      {/* A noter qu'aucune propriété n'est passée au composant `User` */}
      <User />
    </div>
  </div>
);

export default App;
