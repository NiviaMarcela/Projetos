const pokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=5";
const localAPI = "http://localhost:3000/pokemons";

async function buscarESalvarPokemon() {
  try {
    const resposta = await fetch(pokeAPI);
    const dados = await resposta.json();

    const pokemonParaSalvar = {
      nome: dados.name,
      altura: dados.height,
      peso: dados.weight
    };

    const salvar = await fetch(localAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemonParaSalvar)
    });

    const resultado = await salvar.json();
    console.log(resultado);

  } catch (erro) {
    console.error(erro);
  }
}

buscarESalvarPokemon();

 
