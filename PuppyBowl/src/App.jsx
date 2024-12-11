import { useState } from "react";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { addPlayer } from "./API";

function App() {
  const [players, setPlayers] = useState([]);

  const handleAddPlayer = async (newPlayer) => {
    try {
      const addedPlayer = await addPlayer(newPlayer);
      console.log("Player added successfully:", addedPlayer);
      setPlayers((prevPlayers) => [...prevPlayers, addedPlayer]);
    } catch (error) {
      console.error("Failed to add new player:", error);
    }
  };

  return (
    <div id="container">
      <div id="header">
        <h1>🐶 Welcome to the Puppy Bowl! 🐶 </h1>
        <h3>🐾 Add your player below 🐾</h3>
      </div>
      {/* <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/players/:id">Single player</Link>
      </div> */}
      <NewPlayerForm onAddPlayer={handleAddPlayer} />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
