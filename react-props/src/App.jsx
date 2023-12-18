import './App.css'
import Machine from './components/Machine'
import Friend from './components/Friend'
import Fruits from './components/FruitsModules/Fruits'

function App() {

  return (
    <>
      <Machine s1="🥰" s2="🥰" s3="🥰" />
      <Friend name='Elton' hobbies={['Piano', 'Singing', 'Dancing']} title='Just a friend!' />
      <Fruits />
    </>
  )
}

export default App
