import * as dotenv from "dotenv";

dotenv.config();

async function getAbilities(species) {
  const pokeApiHost = process.env.POKE_API_HOST;

  let pokemonData;
  try {
    const response = await fetch(`${pokeApiHost}/v2/pokemon/${species}`);
    pokemonData = await response.json();
  } catch (error) {
    Rollbar.critical("Connection error from remote API" + error);
    return [];
  }

  return pokemonData.abilities.map((record) => record.ability.name);
}
