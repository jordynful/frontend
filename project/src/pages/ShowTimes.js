import './style/showTimes.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { MdChair } from "react-icons/md";
import { Link } from 'react-router-dom';

const times = [
    {
      time: "10:00AM",
    },
    {
        time: "12:00PM",
      },
      {
        time: "1:00PM",
      },
      {
        time: "2:00PM",
      },
      {
        time: "3:30PM",
      },
      {
        time: "4:45PM",
      },
      {
        time: "8:00PM",
      },
      {
        time: "10:00PM",
      },

  
  ];
const ShowTimes = ()  => {
    const location = useLocation();
    let adultTix = 0;
    let childTix = 0;
    let totalTix = 0;
    const { state } = location;
    const [showTimeSelected, setShowTimeSelected] = useState(false);
    const [showSeats, setShowSeats] = useState(false);
    const [checkout, setCheckout] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [totalTickets, setTotalTickets] = useState(0);


    const handleShowTimeSelect = () => {
        setShowTime(true);
        setShowTimeSelected(true);
    }
    const handleConfirmDate = () => {
        let date = document.getElementById("date").value;
        if (date) {
        setShowTime(true);
        }
        else {
            alert("please select a valid date");
        }
    }

    const handleConfirmTickets = () => {
        //check if tickets available 
        setShowSeats(true);
        adultTix = parseInt(document.getElementById("adults").value);
        childTix = parseInt(document.getElementById("children").value);
        console.log(childTix);
        console.log(adultTix);
        if (isNaN(adultTix)) {
            adultTix = parseInt(0);
        }
        if (isNaN(childTix)) {
            childTix = parseInt(0);
        }
        totalTix = childTix + adultTix - 1;
        console.log("come on" + totalTix);
        setTotalTickets(totalTix);
    }
    // const handleShowTimeSelectBa = () => {
    //     setFlip(false);
    // }
    const seatSelectHandler = (choice) => {

        setTotalTickets(totalTickets - 1);
        console.log(choice + totalTickets);
        const newSeat = document.createElement("h6");
        const node = document.createTextNode(choice + ", ");
        document.getElementById(choice).style.color = "blue";
        newSeat.appendChild(node);

        const element = document.getElementById("selected");
        element.appendChild(newSeat);

            //gonna need to call an API and report the new chosen seats
            if (totalTickets <= 0) {
            //put checkout here
                setCheckout(true);
            }
        }

  return (
    //need to make a request to the database to retrieve available showtimes
    <>
    <div className = "contains">
   
        <div className = "titleBox">
            <h1> {state.from}</h1>
        </div>

        <div className = "buyTicketsBox">

            <div className = "ShowTimes">

                <h3>Buy Tickets</h3>
                <div className='tickets'>
                    <form >
                        <label for="date">Date</label><br/>
                        <input type="date" id="date"/><br/>
                    </form>
                    <Button onClick={handleConfirmDate} className = "button">Confirm Date</Button>
                </div>
                    {(showTime &&
                    <div className = "buttonShow">
                        {times.map(time => (
                        <p className = "times" onClick={()=> {
                            handleShowTimeSelect();
                        }}>{time.time}</p>
                    ))}
                    </div>
                    )}
            </div>
{showTimeSelected &&
    <div className = "Tickets">
        <form>
            <label for="adults">Adult:</label><br/>
            <input type="number" id="adults" name="fname"/><br/>
            <label for="children">Children:</label><br/>
            <input type="number" id="children" name="fname"/><br/>
        </form>
        <Button onClick={handleConfirmTickets} className = "button">Confirm Tickets</Button>
    </div>
}
{showSeats && (
    <>
    <h5> Choose your seats!</h5>
    <div id = "selected">

    </div>
    <div className = "seatsContainer">
        <br/>
        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A1")} id = "A1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A2")} id = "A2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A3")} id = "A3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A4")} id = "A4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A5")} id = "A5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A6")} id = "A6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A7")} id = "A7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A8")} id = "A8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A9")} id = "A9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A10")} id = "A10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A11")} id = "A11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"A12")} id = "A12"/>
        </div>

        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B1")} id = "B1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B2")} id = "B2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B3")} id = "B3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B4")} id = "B4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B5")} id = "B5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B6")} id = "B6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B7")} id = "B7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B8")} id = "B8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B9")} id = "B9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B10")} id = "B10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B11")} id = "B11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"B12")} id = "B12"/>
        </div>
        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C1")} id = "C1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C2")} id = "C2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C3")} id = "C3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C4")} id = "C4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C5")} id = "C5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C6")} id = "C6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C7")} id = "C7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C8")} id = "C8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C9")} id = "C9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C10")} id = "C10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C11")} id = "C11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"C12")} id = "C12"/>
        </div>
        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D1")} id = "D1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D2")} id = "D2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D3")} id = "D3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D4")} id = "D4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D5")} id = "D5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D6")} id = "D6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D7")} id = "D7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D8")} id = "D8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D9")} id = "D9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D10")} id = "D10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D11")} id = "D11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"D12")} id = "D12"/>
        </div>
        <br></br>
        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E1")} id = "E1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E2")} id = "E2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E3")} id = "E3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E4")} id = "E4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E5")} id = "E5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E6")} id = "E6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E7")} id = "E7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E8")} id = "E8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E9")} id = "E9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E10")} id = "E10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E11")} id = "E11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"E12")} id = "E12"/>
        </div>
        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F1")} id = "F1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F2")} id = "F2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F3")} id = "F3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F4")} id = "F4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F5")} id = "F5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F6")} id = "F6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F7")} id = "F7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F8")} id = "F8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F9")} id = "F9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F10")} id = "F10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F11")} id = "F11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"F12")} id = "F12"/>
        </div>
        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G1")} id = "G1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G2")} id = "G2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G3")} id = "G3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G4")} id = "G4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G5")} id = "G5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G6")} id = "G6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G7")} id = "G7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G8")} id = "G8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G9")} id = "G9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G10")} id = "G10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G11")} id = "G11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"G12")} id = "G12"/>
        </div>
        <div>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H1")} id = "H1"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H2")} id = "H2"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H3")} id = "H3"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H4")} id = "H4"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H5")} id = "H5"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H6")} id = "H6"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H7")} id = "H7"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H8")} id = "H8"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H9")} id = "H9"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H10")} id = "H10"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H11")} id = "H11"/>
        <MdChair className = "seats" onClick = {seatSelectHandler.bind(this,"H12")} id = "H12"/>
        </div>
        <br/>
        SCREEN
        {(checkout && 
            <div className = "noMore">

                <p className = "textNoMore">All seats selected</p>

            </div>
                )}
       

    </div>
    </>
)}

{(checkout && 
    <div className = "end">

<Link to="/checkOut" className = "button2">Checkout</Link>

    </div>     
        
 )}
</div>
</div>
    </>
  );
}

export default ShowTimes;