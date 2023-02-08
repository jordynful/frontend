import './style/movieCard.css';
import { useState } from 'react';
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
        <p onClick = {handleClickBack}>{props.description}</p>
        )}
        
    </div>
    </>
  );
}

export default MovieCard;