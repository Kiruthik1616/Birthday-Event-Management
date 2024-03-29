import  { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import '../assets/css/Profile.css';
import bg from '../assets/images/bg.jpg';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, Cityville',
    phoneNumber: '123-456-7890',
  });
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};
  const [isEditing, setEditing] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };
  return (
    <div>
    <NavBar/>
    <SideBar/>
    <div className='entire' style={backgroundImageStyle}>
      <div className='body1' >
      <h1>User Profile</h1>
      {isEditing ? (
        <div className='form1'>
        <form  onSubmit={handleSubmit}>
          <label className='label1'>
            Name:<span className="tab"/>
            <input type="text" className='input1' name="name" value={userDetails.name} onChange={handleChange} />
          </label>
          <br/>
          <label className='label1'>
            Email:<span className="tab"/>
            <input type="email" className='input1' name="email" value={userDetails.email} onChange={handleChange} />
          </label>
          <br/>
          <label className='label1'>
            Address:<span className="tab"/>
            <input type="text" className='input1' name="address" value={userDetails.address} onChange={handleChange} />
          </label >
          <br/>
          <label className='label1'>
            Phone Number:<span className="tab"/> 
            <input className='input1' type="tel" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
          </label>
          <br/><br/>
          <button className='buttonx' type="submit">Save Changes</button>
        </form>
        </div>
      ) : (
        <div className='display'>
          <p className='p1'><b>Name:  </b>{userDetails.name}</p>
          <p className='p1'><b>Email:  </b> {userDetails.email}</p>
          <p className='p1'><b>Address:  </b> {userDetails.address}</p>
          <p className='p1'><b>Phone Number:  </b> {userDetails.phoneNumber}</p>
          <br/>
          <button className="buttonY"onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Profile;