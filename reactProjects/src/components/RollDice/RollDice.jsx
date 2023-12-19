import { useState } from "react";
import Die from "./Die/Die";
import './RollDice.css';

const RollDice = () => {
  const generateNumber = () => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
  
    // Convert the number to its corresponding name
    return ['one', 'two', 'three', 'four', 'five', 'six'][randomNumber - 1] || 'Invalid';
  };

  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);

    setTimeout(() => {
      setDie1(generateNumber());
      setDie2(generateNumber());
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="RollDice-container">
      <div className="Dice-container">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll dice'}
      </button>
    </div>
  );
};

export default RollDice;