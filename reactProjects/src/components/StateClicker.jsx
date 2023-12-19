import { useState } from "react"

const StateClicker = () => {
  const [num, setNum] = useState(0)

  const randomNumberGenerator = () => {
    setNum(Math.floor(Math.random() * 10))
  }
  return (
    <>
      <h1>Number is {num}</h1>
      { num !== 7 ? <button onClick={randomNumberGenerator}>sgeht</button> : <span>You win</span> }
    </>

  )
}

export default StateClicker