import { Link } from 'react-router-dom';
import '../assets/css/SideBar.css'; 
import Img from "../assets/images/logout.png";

const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
      
        <br />
        
        <br/>
        
        <p className='ele'><Link to="/Theme">Theme</Link></p>
        <p className='ele'><Link to="/Menu">Menu</Link></p>
       
       
        <p className='ele'><Link to="/"><img className="logout"src={Img}></img></Link></p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className='ele'><Link to="/him">SignOut</Link></p>
    </div>
  );
};

export default LeftSidebar;