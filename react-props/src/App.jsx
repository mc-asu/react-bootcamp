import './App.css'
import Machine from './components/Machine'
import Friend from './components/Friend'
import Fruits from './components/FruitsModules/Fruits'
import Pokedex from './components/Pokemon/Pokedex/Pokedex'
import Pokegame from './components/Pokemon/Pokegame/Pokegame'

function App() {

  return (
    <>
      <Pokegame />
      {/* <Machine s1="🥰" s2="🥰" s3="🥰" />
      <Friend name='Elton' hobbies={['Piano', 'Singing', 'Dancing']} title='Just a friend!' />
      <Fruits /> */}
    </>
  )
}

export default App
