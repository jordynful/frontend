import './style/showTimes.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
function ShowTimes(props) {
    const movie = props.movie;
    const [showTimeSelected, setShowTimeSelected] = useState(false);
    const [showSeats, setShowSeats] = useState(false);
    const handleShowTimeSelect = () => {
        setShowTimeSelected(true);
    }

    const handleConfirmTickets = () => {
        //check if tickets available 
        setShowSeats(true);
    }
    // const handleShowTimeSelectBa = () => {
    //     setFlip(false);
    // }
  return (
    //need to make a request to the database to retrieve available showtimes
    <>
    showtimes
    <div className = "ShowTimes">
        <p> Here we will use the map function with information from 
            the database and after clicking a showtime, the ticket information
            will be displayed below.
        </p>
        <div className = "buttonShow" onClick={handleShowTimeSelect}>showtime</div>
    </div>
{showTimeSelected &&
    <div className = "Tickets">
        tickets
        <Button onClick={handleConfirmTickets}>Confirm Tickets</Button>
    </div>
}
{showSeats && (
    <div className = "Seats">
        seat selection stuff here
    </div>
)}
    </>
  );
}

export default ShowTimes;