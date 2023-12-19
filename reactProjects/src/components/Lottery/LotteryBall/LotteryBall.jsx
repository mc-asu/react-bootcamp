import './LotteryBall.css'

const LotteryBall = ({ number }) => {
  return (
    <div className="number-circle">
      <span className="number">{number}</span>
    </div>
  )
}

export default LotteryBall