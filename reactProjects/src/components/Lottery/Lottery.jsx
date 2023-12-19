import { useState } from 'react'
import './Lottery.css'
import LotteryBall from './LotteryBall/LotteryBall'

const generateLottoNumber = (min, max) => {
  // Generate a random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Lottery = ({title = 'Lottery', numBalls = 6, maxNum = 49}) => {
  // Create an array of states for balls
  const [balls, setBalls] = useState( Array.from({ length: numBalls }, () => generateLottoNumber(1, 49)))

  const updateAllBalls = (min, max) => {
    setBalls(prevBalls => {
      return prevBalls.map(() => generateLottoNumber(1, 49));
    });
  };

  return (
    <div className="Lottery">
      <h1>{title}</h1>
      <div className="Lottery_balls">
        {balls.map((ball, index) => (

          <div key={index}>
            <LotteryBall number={ball} />
          </div>
        ))}
      </div>
      <button onClick={updateAllBalls}>Generate</button>
    </div>
  )
}

export default Lottery