import axios from "axios"


export const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })



type CharacterType = {
  id?: number; // The id of the character.
  name: string; // The name of the character.
  status: string; // The status of the character ('Alive', 'Dead' or 'unknown').
  species: string; // The species of the character.
  type: string; // The type or subspecies of the character.
  gender: string; // The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
  origin: { name: string, url: string }; // Name and link to the character's origin location.
  location: { name: string, url: string }; // Name and link to the character's last known location endpoint.
  image: string; // Link to the character's image.
  episode: string[]; // List of episodes in which this character appeared.
  url: string; // Link to the character's own URL endpoint.
  created: string; // Time at which the character was created in the database.
}

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[]; // List of characters who have been seen in the episode.
  url: string; // Link to the episode's own endpoint.
  created: string; // Time at which the episode was created in the database.
}