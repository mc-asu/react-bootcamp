import { generateObjects, distributeObjects } from "../helpers/helpers"
import pokemonList from "../helpers/pokemons.json"
import Pokehands from "./Pokehands"

const Pokegame = () => {
  const pokemonToPick = generateObjects(pokemonList)
  const { hand1, hand2 } = distributeObjects(pokemonToPick);
  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base.HP, 0)
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base.HP, 0)
  return (
    <>
      <Pokehands pokemonList={hand1} exp={exp1} isWinner={exp1 > exp2}/>
      <Pokehands pokemonList={hand2} exp={exp2} isWinner={exp1 < exp2}/>
    </>

  )
}

export default Pokegame