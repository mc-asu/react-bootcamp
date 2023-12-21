// Board.js
import React from 'react';
import Light from './Light'; // Import the Light component
import './LightsOut.css'; // Import the external CSS file

const Board = ({ nRow = 5, nCol = 5 }) => {
  // Example click handler
  const handleBoxClick = (row, col) => {
    console.log(`Light clicked at row ${row}, column ${col}`);
    // Add your logic for handling the light click
  };

  return (
    <div
      className="grid-container"
      style={{ display: 'grid', gridTemplateColumns: `repeat(${nCol}, 1fr)`, gridGap: '10px' }}
    >
      {/* Generate an array of elements for cells */}
      {Array.from({ length: nRow * nCol }, (_, index) => (
        <Light
          key={index}
          onClick={() => handleBoxClick(Math.floor(index / nCol), index % nCol)}
        />
      ))}
    </div>
  );
};

export default Board;
