import './style/components.css';
import { Link } from 'react-router-dom';
import {FaStumbleuponCircle} from 'react-icons/fa';
function Header() {
    return (
      <>
      <div className='navBar'>
        <div className = "linkContainer">
      <Link to='/movies' className='navLink'>Movies</Link>
        <FaStumbleuponCircle className = "logo"/>
      <Link to='/book-tickets' className='navLink'>Book Tickets</Link>
      </div>
      <Link to='/login' className='login'>Login</Link>
      </div>
      </>
    );
  }
  
  export default Header;