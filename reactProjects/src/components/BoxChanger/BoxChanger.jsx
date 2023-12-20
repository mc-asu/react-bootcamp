import { useState, useEffect } from "react";
import Box from "./Box";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const BoxChanger = ({numOfBox = 16}) => {

  const [box, setBoxes] = useState(Array.from ({length: numOfBox}), getRandomColor)

  useEffect(() => {
    // Generate random colors when the component mounts
    const randomColors = Array.from({ length: numOfBox }, getRandomColor);
    setBoxes(randomColors);
  }, [numOfBox]);

  const handleBoxClick = (index) => {
    setBoxes((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = getRandomColor();
      return newColors;
    });
  };
  
  return (
    <div className="BoxChanger">
      {
        box.map((color, index) => (
          <Box key={index} color={color} onBoxClick={() => handleBoxClick(index)} />
        )
      )
    }
    </div>
  )
   
}

export default BoxChanger