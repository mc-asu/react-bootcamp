// AlphaButtons.js
const AlphaButtons = ({ onClick, disabledLetters }) => {
  const generateButtons = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    return letters.split("").map((letter) => {
      const isDisabled = disabledLetters.has(letter);

      return (
        <button
          key={letter}
          onClick={() => onClick(letter)}
          disabled={isDisabled}
        >
          {letter}
        </button>
      );
    });
  };

  return <div>{generateButtons()}</div>;
};

export default AlphaButtons;
