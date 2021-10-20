import pokemonCardTpl from "./templates/pokemon-card.hbs";
import API from "./api-service";

const refs = getRefs();
refs.searchForm.addEventListener("aubmit", onSearch);
// fetch;
//bad code
// fetch("https://pokeapi.co/api/v2/pokemon/2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((pokemon) => {
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     console.log(markup);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//good code

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchPokemon(1)
    .then(renderPockemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//     (response) => {
//       response.json();
//     }
//   );
// }
//что происходит?
// function fetchPokemon() {
//   return промис.(response.json()).зен(покемон=>);
//   });
// }

function renderPockemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHtml = markup;
}

function onFetchError(error) {
  alert("ooops we can not find that you are searching");
}
