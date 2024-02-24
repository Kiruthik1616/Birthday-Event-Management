import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import loginImage from 'E:/birthday/event/src/assets/images/img1.jpg';

import '../assets/css/About.css'
import bg from '../assets/images/bg.jpg';
function About() {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <NavBar />
            <SideBar />
            <br></br>
            
           
            <div className="bg" style={backgroundImageStyle}>
            <div className="home2" >
                <br></br>
                <br></br>
                <h1>ABOUT<span style={{ color: 'blue' }}> US</span> </h1>
            </div>
            <div className="birthday-event-container" style={{width:"1000px"}} >
                <div className="image-container">
                    <img src={loginImage} alt="Login Image" />
                </div>
                <div className="content-container">
                    <h1>We Will Give A Very Special
                        <br></br>
                        Celebration For You!
                    </h1>
                    <p>
                        where we turn dreams into unforgettable moments! We specialize in crafting enchanting birthday celebrations that leave lasting impressions. From personalized themes that reflect your unique style to seamless coordination of entertainment, decorations, and delectable treats, we strive to create an atmosphere of joy and celebration. Our commitment is to transform your vision into reality, making each birthday event a cherished memory.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;
