import pokemonList from "../helpers/pokemons";
import Pokecard from "../Pokecard/Pokecard";
import './Pokedex.css'

const Pokedex = () => {
  return (
    <div className="Pokedex">
      { pokemonList.map((pokemon) => <Pokecard key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}

export default Pokedex