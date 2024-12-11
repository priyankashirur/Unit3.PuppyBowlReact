import React, { useState } from "react";

export default function NewPlayerForm({ setSearchQuery, onAddPlayer }) {
  //initialize variables i will use:
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const handleSubmit = async (e) => {};

  return (
    <form className="newplayerform" onSubmit={handleSubmit}>
      <label>Player Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> Breed: </label>
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />{" "}
      <input type="submit" />
    </form>
  );
}
