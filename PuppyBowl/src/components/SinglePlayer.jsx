import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";

export default function SinglePlayer() {
  const { id } = useParams(); // Extract the player ID from the URL
  console.log("Extracted ID from URL:", id); // Debug log for ID

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  //use useEffect to make a change for the button - needs to be calling a fetch single player func

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        console.log("Calling fetchSinglePlayer with ID:", id); // Debugging log
        const fetchedPlayer = await fetchSinglePlayer(id); // Fetch player details by ID
        console.log("fetched player data", fetchedPlayer);
        setSelectedPlayer(fetchedPlayer);
        console.log("selected", selectedPlayer);
      } catch (error) {
        console.error("Failed to fetch player details:", error);
      }
    };
    getPlayerDetails();
  }, [id]);

  if (!selectedPlayer) {
    return <p>Loading player details...</p>; // Handle loading state
  }

  return (
    <div className="singleplayer">
      <h3>Player Details</h3>
      <h4>Player Name: {selectedPlayer.name}</h4>
      <p>Breed: {selectedPlayer.breed}</p>
      <p>Status: {selectedPlayer.status}</p>
      <img src={player.imageUrl} alt={`${player.name}`} />
    </div>
  );
}