import './LightsOut.css'
const Light = ({ isOn, onClick}) => {
  return <div
  onClick={onClick}
  className="light-box grid-item" 
  style={{ backgroundColor: isOn ? '#fff' : '#000' }}
/>
}

export default Light

