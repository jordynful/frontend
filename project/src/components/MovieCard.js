import './style/movieCard.css';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Modal from 'react-modal';

//Code for embedding youtube video
import PropTypes from "prop-types";
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
Modal.setAppElement('#root');
//code for MovieCard
const MovieCard = props  => {
    const [flip, setFlip] = useState(false);

    const handleClick = () => {
        setFlip(true);
    }
    const handleClickBack = () => {
        setFlip(false);
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        
      }
    
      function closeModal() {
        setIsOpen(false);
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

        <button onClick={openModal}>Watch Trailer</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style="content"
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
            <div>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
      </Modal>

        </>
        )}
        
    </div>
    </>
  );
}

export default MovieCard;