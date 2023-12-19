import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Die.css'
const Die = ({face, rolling}) => <FontAwesomeIcon className={`Die ${rolling && 'shaking'}`} icon={['fas', `dice-${face}`]} />

export default Die