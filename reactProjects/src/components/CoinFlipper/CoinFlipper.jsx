import { useState } from "react";
import Coin from "./Coin/Coin";
import './CoinFlipper.css'

const CoinFlipper = () => {
  const [coinState, setCoinState] = useState({
    coinSide: true,
    totalFlips: 0,
    headsCount: 0,
    tailsCount: 0,
    isFlipping: false,
  });

  const flipCoin = () => {
    if (coinState.isFlipping) {
      return;
    }

    setCoinState((prevCoinState) => ({ ...prevCoinState, isFlipping: true }));

    setTimeout(() => {
      const newCoinSide = Math.random() < 0.5;

      setCoinState({
        coinSide: newCoinSide,
        totalFlips: coinState.totalFlips + 1,
        headsCount: newCoinSide ? coinState.headsCount + 1 : coinState.headsCount,
        tailsCount: newCoinSide ? coinState.tailsCount : coinState.tailsCount + 1,
        isFlipping: false
      });
    }, 1000);
  }
  return (
    <div className="CoinFlipper">
      <h3>Let's flip a coin</h3>
      <Coin coinSide={coinState.coinSide} isFlipping={coinState.isFlipping} />
      <button onClick={flipCoin}>Flip</button>
      <p>Out of {coinState.totalFlips} flips, there have been {coinState.headsCount} heads and {coinState.tailsCount} tails.</p>
    </div>
  )
}

export default CoinFlipper