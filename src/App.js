import React from "react";
import User from "./components/User";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    {/* A noter qu'aucune propriété n'est passée au composant `User` */}
    <User />
  </div>
);

export default App;
