import React from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers/AllPlayers";

import Header from "./components/Header/Header";


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <AllPlayers />
    </React.Fragment>
  );
}

export default App;
