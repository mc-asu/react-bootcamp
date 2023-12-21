import { useState, useEffect } from 'react';
import Light from './Light'; // Import the Light component
import './LightsOut.css'; // Import the external CSS file

const Board = ({ nRow = 5, nCol = 5 }) => {
  const [grid, setGrid] = useState([]);

  // Function to generate the initial grid with some lights turned on
  const initializeGrid = () => {
    const initialGrid = Array.from({ length: nRow }, () =>
      Array.from({ length: nCol }, () => Math.random() < 0.3) // Adjust the probability as needed
    );
    setGrid(initialGrid);
  };

  useEffect(() => {
    initializeGrid();
  }, [nRow, nCol]);

  // Toggle the state of a light and its adjacent lights
  const toggleLight = (row, col) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);

      // Toggle the state of the clicked light
      newGrid[row][col] = !newGrid[row][col];

      // Toggle the state of adjacent lights (left, right, top, bottom)
      const directions = [
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
        { row: 0, col: 1 },
      ];

      directions.forEach((direction) => {
        const newRow = row + direction.row;
        const newCol = col + direction.col;

        if (newRow >= 0 && newRow < nRow && newCol >= 0 && newCol < nCol) {
          newGrid[newRow][newCol] = !newGrid[newRow][newCol];
        }
      });

      return newGrid;
    });
  };

  const isEveryLightOff = grid.every((row) => row.every((isOn) => !isOn));

  return (
    <>
      {isEveryLightOff ? (
        <div>You win</div>
      ) : (
        <div
          className="grid-container"
          style={{ display: 'grid', gridTemplateColumns: `repeat(${nCol}, 1fr)`, gridGap: '10px' }}
        >
          {/* Generate an array of elements for cells */}
          {grid.map((row, rowIndex) =>
            row.map((isOn, colIndex) => (
              <Light key={colIndex} isOn={isOn} onClick={() => toggleLight(rowIndex, colIndex)} />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Board;
