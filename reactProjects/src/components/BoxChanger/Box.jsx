import './BoxChanger.css'
const Box = ({color, onBoxClick}) => {
  const handleClick = () => {
    // Emit an event by calling the function passed from the parent
    onChildEvent('Hello from the Child!');
  };
  return <div
    onClick={onBoxClick}
    className="box" 
    style={{ backgroundColor: color }}
  />

}

export default Box