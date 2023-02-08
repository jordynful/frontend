import './style/movieCard.css';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
const MovieCard = props  => {
    const [flip, setFlip] = useState(false);

    const handleClick = () => {
        setFlip(true);
    }
    const handleClickBack = () => {
        setFlip(false);
    }
  return (
    <>
    <div className = "card">
        <h5>{props.title}</h5>
        {!flip &&(
        <img src= {props.imageUrl} onClick = {handleClick}/>
        )}
        {flip &&(
            <>
        <p onClick = {handleClickBack}>{props.description}</p>
        <Link to ={{pathname:"/ShowTimes", movie: props.title }} className=''>See Show Times</Link>
        </>
        )}
        
    </div>
    </>
  );
}

export default MovieCard;