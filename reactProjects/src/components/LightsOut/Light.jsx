import './LightsOut.css'
const Light = ({ active, onClick}) => {
  return <div
  onClick={onClick}
  className="light-box grid-item" 
  style={{ backgroundColor: active ? '#fff' : '#000' }}
/>
}

export default Light

