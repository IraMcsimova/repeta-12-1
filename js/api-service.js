function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    (response) => {
      response.json();
    }
  );
}
export default { fetchPokemon };
