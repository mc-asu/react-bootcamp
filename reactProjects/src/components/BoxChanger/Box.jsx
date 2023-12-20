import './BoxChanger.css'
const Box = ({color, onBoxClick}) => {
  return <div
    onClick={onBoxClick}
    className="box" 
    style={{ backgroundColor: color }}
  />

}

export default Box