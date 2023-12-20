import { useState, useEffect } from 'react';
import './Coin.css';

const Coin = ({ coinSide, isFlipping }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isFlipping) {
      setRotation(rotation + 180);
    }
  }, [isFlipping]);

  return (
    <div className={`coin ${isFlipping ? 'flip' : ''}`} style={{ transform: `rotateY(${rotation}deg)` }}>
      <div
      className={`coin-image ${coinSide ? 'heads' : 'tails'}`} 
      >
 <img 
        
        src={coinSide ? 
            'https://i.pcgs.com/s3/cu-pcgs/Photograde/500/FlowingDol-66o.jpg' :
            'https://i.pcgs.com/s3/cu-pcgs/Photograde/500/FlowingDol-66r.jpg'
          } 
        alt={coinSide ? 'coin_head' : 'coin_tail'}  
      />
      </div>
     
    </div>
  );
};

export default Coin;
