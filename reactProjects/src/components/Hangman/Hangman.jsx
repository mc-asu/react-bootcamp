import { useState } from "react";
import AlphaButtons from "./AlphaButtons";
import "./Hangman.css";
import img0 from "./src/0.jpg";
import img1 from "./src/1.jpg";
import img2 from "./src/2.jpg";
import img3 from "./src/3.jpg";
import img4 from "./src/4.jpg";
import img5 from "./src/5.jpg";
import img6 from "./src/6.jpg";
import randomWord from "./words";

const Hangman = ({ maxGuess = 6 }) => {
  const [gameState, setGameState] = useState({
    nWrong: 0,
    guessed: new Set(),
    answer: randomWord(),
  });

  const resetGame = () => {
    setGameState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  };

  const guessedWord = () => {
    return gameState.answer
      .split("")
      .map((ltr) => (gameState.guessed.has(ltr) ? ltr : "_"))
      .join("");
  }

  const handleGuess = (ltr) => {
    setGameState((prevState) => {
      const isCorrectGuess = prevState.answer.includes(ltr);
      return {
        ...prevState,
        guessed: new Set([...prevState.guessed, ltr]),
        nWrong: isCorrectGuess ? prevState.nWrong : prevState.nWrong + 1,
      };
    });
  };

  const disableAllLetters = gameState.nWrong >= maxGuess || gameState.answer === guessedWord();

  return (
    <div className="Hangman">
      <h1>Hangman</h1>
      <img
        src={[img0, img1, img2, img3, img4, img5, img6][disableAllLetters ? 6 : gameState.nWrong]}
        alt={`Wrong guesses: ${gameState.nWrong}/${maxGuess}`}
      />
      <p>Number of wrong guesses: {gameState.nWrong}</p>
      {disableAllLetters ? (
        <p>
          {gameState.nWrong >= maxGuess
            ? `You lose! The correct word was ${gameState.answer}.`
            : `You guessed the word: ${guessedWord()}!`}
        </p>
      ) : (
        <>
          <p className="Hangman-word">{guessedWord()}</p>
          <AlphaButtons onClick={handleGuess} disabledLetters={gameState.guessed} />
        </>
      )}
      <button onClick={resetGame}>Restart</button>
    </div>
  );
};

export default Hangman;
