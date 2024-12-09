import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { fetchAllPlayers } from "./API";

function App() {
  //initialize an empty array that you will be displaying
  const [players, setPlayers] = useState([]);

  //run useEffect ONCE to fetch the api data. useeffect adds things to the dom
  useEffect(() => {
    const getPlayers = async () => {
      const response = await fetchAllPlayers();
      setPlayers(response);
    };
    getPlayers();
  }, []);

  return (
    <>
      <div id="header">
        <h1>🐾 Welcome to the Puppy bowl 🐾</h1>
        <h3>Add you player below!</h3>
      </div>

      <div id="navbar">
        <label> Name: </label>
        <input type="text" />
        <label> Breed: </label>
        <input type="text" /> <input type="submit" value="Submit" />{" "}
        <label>Search: </label>
        <input type="text" />
      </div>

      <div id="all_players_container">
        <h4>All of our current competitors:</h4>
        {players.map((player) => (
          <div key={player.id}>{player.name}</div> // Render player names
        ))}
      </div>
    </>
  );
}

export default App;
