async function getAbilities(species) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`);
  const pokemonData = await response.json();
  return pokemonData.abilities.map((record) => record.ability.name);
}

const abilities = await getAbilities(`squirtle`);
console.log(`got moves:`, abilities);
