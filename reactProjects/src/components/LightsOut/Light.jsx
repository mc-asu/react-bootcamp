import './LightsOut.css'
const Light = ({ isOn, onClick}) => {
  return <div
  onClick={onClick}
  className={`light-box grid-item ${isOn ? 'active' : ''}`}
/>
}

export default Light

// import './LightsOut.css'
// const Light = ({ isOn, onClick}) => {
//   return <div
//   onClick={onClick}
//   className={`light-box grid-item ${{isOn} ? '' : 'active'}`}
// />
// }

// export default Light

