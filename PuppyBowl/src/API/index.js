//all API requests here

export const fetchPlayers = async () => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players"
    );
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players/${id}`
    );
    const data = await response.json();
    console.log("API RESPONSE", data);
    return data.data.player;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
