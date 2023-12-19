import { zeroPad } from "../helpers/helpers"
import './Pokecard.css'

const Pokecard = ({ pokemon }) => {
  const useV1 = true
  const { name, type, id, base } = pokemon
  const POKE_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  const POKE_IMG_V2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
  const POKE_GIF = `https://projectpokemon.org/images/normal-sprite/${name.english.toLowerCase()}.gif`
  const IMG_SRC = `${useV1 ? POKE_IMG : POKE_IMG_V2}${zeroPad(id, useV1 ? 0 : 3)}.png`
  return (
    <div className="Pokecard">
      <span className="Pokecard-data">{name.english}</span>
      <div className="Pokemon-image-container">
        <img className="Pokecard-img" 
          alt={name.english}
          src={IMG_SRC}
          onMouseOver={e => (e.currentTarget.src = POKE_GIF)}
          onMouseOut={e => (e.currentTarget.src = IMG_SRC)} 
          loading="lazy"
        />
      </div>
      <div className="Pokecard-types">
        {
          type.map(t => <div className="Pokecard-type Pokecard-data">{t}</div>
          )
        }
      </div>
    
      <div className="Pokecard-base">
        {Object.entries(base).map(([key, value]) => (
          <span className="Pokecard-data" key={key}>
            {key}: {value}
          </span>
        ))}
      </div>
   
    </div>
  )
}

export default Pokecard
