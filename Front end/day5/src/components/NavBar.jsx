import '../assets/css/NavBarcss.css';
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      
        <div className='nav1'>
  
            <p className='nav2'><Link to="/profile">Profile</Link></p>
            {/* <p className='nav2'> <Link to="/gallery">Gallery</Link></p> */}
            <p className='nav2'> <Link to="/services">Services</Link></p>
            <p className='nav2'>  <Link to="/about">About</Link></p>
            <p className='nav2'><Link to="/HomePage">Home</Link></p>
        </div>
      </div>
  );
};

export default NavBar;
