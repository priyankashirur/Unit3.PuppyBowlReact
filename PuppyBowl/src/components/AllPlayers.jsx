import { useEffect } from "react";
import { useState } from "react";
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate(); //initialize usenavigate

  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };
    getPlayers();
  }, []);

  const handleSeeDetails = (id) => {
    // Navigate to a details page with the player's ID
    navigate(`/players/${id}`);
  };

  return (
    <div className="allplayers">
      {players.length > 0 ? (
        players.map((player) => (
          <div key={player.id}>
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
  );
}
