async function getAbilities(species) {
  let response;
  try {
    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`);
  } catch (error) {
    // Alter the user somehow if this doesn't work
    console.log(`something went wrong:`, error);
    return;
  }

  const pokemonData = await response.json();
  return pokemonData.abilities.map((record) => record.ability.name);
}

const abilities = await getAbilities(`squirtle`);
console.log(`got moves:`, abilities);
