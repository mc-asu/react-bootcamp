import { useState, useEffect } from 'react';

const Rando = ({ maxNum }) => {
  const [num, setNum] = useState(0);


  // Introduced the useEffect Hook to manage the interval.
  // This ensures that the interval is set up only once when the 
  // component mounts and is cleared when the component unmounts.
  let intervalId
  useEffect(() => {
    const makeTimer = () => {
      intervalId = setInterval(() => {
        let rand = Math.floor(Math.random() * maxNum)
        setNum(rand);
      }, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    };

    makeTimer();

    // Optionally, you may want to clear the interval when the component re-renders
    // Uncomment the line below if needed
    return () => clearInterval(intervalId);
  }, [maxNum]);
  return <h1>{num}</h1>;
};

export default Rando;
