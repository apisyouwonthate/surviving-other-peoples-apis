async function getAbilities(species) {
  let pokemonData;
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${species}`
    );
    pokemonData = await response.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.log("There was a SyntaxError", error);
    } else {
      console.log("There was an error", error);
    }
    return [];
  }

  return pokemonData.abilities.map((record) => record.ability.name);
}

const abilities = await getAbilities(`squirtle`);
console.log(`got moves:`, abilities);
