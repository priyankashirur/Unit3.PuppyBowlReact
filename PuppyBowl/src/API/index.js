const APIURL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players";

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data", data);
    return data.data.players;
  } catch (error) {
    console.log(error);
    return [];
  }
};
