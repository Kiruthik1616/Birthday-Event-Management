import { Link } from 'react-router-dom';
import admin from '../assets/images/admin.jpg'



function Landing() {
    return (
        <div>
            
            <div className="home-container">
                <div className="image-container">
                <Link to="/LoginPage"> <img src={admin} alt="User Image" className="user-image" /></Link>
                    <p>User</p>
                </div>
                <div className="image-container">
                <Link to="/Adminlogin">   <img src={admin} alt="Admin Image" className="admin-image" /></Link>
                    <p>Admin</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
