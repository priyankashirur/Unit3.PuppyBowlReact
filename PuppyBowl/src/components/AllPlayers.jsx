import { useEffect, useState } from "react";
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [players, setPlayers] = useState([]);

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };
    getPlayers();
  }, [players]);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSeeDetails = (id) => {
    // Navigate to a details page with the player's ID
    navigate(`/players/${id}`);
  };

  const handleDelete = () => {};

  return (
    <div>
      <div className="search-bar">
        <label htmlFor="search" className="search-label">
          Search for a Player:
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="search-input"
          placeholder="Enter player name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} //get the value of the change
        />
      </div>
      <h4>Our Current Competitors:</h4>
      <div className="allplayers">
        {players.length > 0 ? (
          filteredPlayers.map((player) => (
            <div className="puppycard" key={player.id}>
              <h4>{player.name}</h4>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
              <img src={player.imageUrl} alt={`${player.name}`} />
              <br />
              <button onClick={() => handleSeeDetails(player.id)}>
                See Details
              </button>{" "}
              <button>Delete</button>
            </div>
          ))
        ) : (
          <p>Loading page...</p>
        )}
      </div>
    </div>
  );
}
