import React, { useState } from "react";

export default function NewPlayerForm({ setSearchQuery }) {
  //initialize variables i will use:
  const [name, setName] = useState(null);
  const [breed, setBreed] = useState(null);

  return (
    <div className="formsearch">
      <form className="newplayerform">
        <label>Player Name: </label>
        <input type="text" />
        <label> Breed: </label>
        <input type="text" /> <input type="submit" />
      </form>
    </div>
  );
}
