import { useState } from "react";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/players/:id">Single player</Link>
      </div>
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
