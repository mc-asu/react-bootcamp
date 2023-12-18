import Pokecard from "../Pokecard/Pokecard";
import './Pokehands.css'

const Pokehands = ({pokemonList, exp, isWinner}) => {
  return (
    <div className="Pokehands-container">
      <span>
      { isWinner && '⬇️ This hand wins ⬇️'}
      </span>
      <span>
      { `Total experience: ${exp}.`}
      </span>
      <div className="Pokehands">
        { pokemonList.map((pokemon) => <Pokecard key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </div>

  )
}

export default Pokehands