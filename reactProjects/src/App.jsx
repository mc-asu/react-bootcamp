import './App.css'
import { useState } from 'react'

import Machine from './components/Machine'
import Friend from './components/Friend'
import Fruits from './components/FruitsModules/Fruits'
import Pokedex from './components/Pokemon/Pokedex/Pokedex'
import Pokegame from './components/Pokemon/Pokegame/Pokegame'
import Rando from './components/Rando'
import Counter from './components/Counter'
import StateClicker from './components/StateClicker'
import RollDice from './components/RollDice/RollDice'
import Lottery from './components/Lottery/Lottery'

// Specify all properties: name, family, style


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Lottery title={"Lottery"} numBalls={6}/> */}
    {/* <Lottery title={"Mini Daily"} numBalls={4}/> */}
    {/* <RollDice /> */}
    {/* <Rando maxNum={7} /> */}
    {/* <StateClicker /> */}
    <Pokegame /> 
    {/* <Machine s1="🥰" s2="🥰" s3="🥰" /> */}
    {/* <Friend name='Elton' hobbies={['Piano', 'Singing', 'Dancing']} title='Just a friend!' /> */}
    {/* <Fruits /> */}
    </>
  )
}

export default App
