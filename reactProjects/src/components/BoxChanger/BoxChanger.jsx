import { useState, useEffect, useCallback } from "react";
import Box from "./Box";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const BoxChanger = ({ numOfBoxes = 1000 }) => {
  const [boxes, setBoxes] = useState(Array.from({ length: numOfBoxes }, getRandomColor));

  useEffect(() => {
    // Generate random colors when the component mounts
    const randomColors = Array.from({ length: numOfBoxes }, getRandomColor);
    setBoxes(randomColors);
  }, [numOfBoxes]);

  const handleBoxClick = useCallback((index) => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes[index] = getRandomColor();
      return newBoxes;
    });
  }, []);

  return (
    <div className="BoxChanger">
      {boxes.map((color, index) => (
        <Box key={index} color={color} onBoxClick={() => handleBoxClick(index)} />
      ))}
    </div>
  );
}

export default BoxChanger;
