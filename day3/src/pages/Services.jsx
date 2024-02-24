import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import '../assets/css/Services.css'
import invitation from '../assets/images/invitation.png';
import cake from '../assets/images/birthday-cake.png';
import camera from '../assets/images/camera.png';
import menu from '../assets/images/menu.png';
import decoration from '../assets/images/wedding-arch.png'
import halls from '../assets/images/hall.png';
import bg from '../assets/images/bg.jpg';
function Services()
{
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding:'0px 50px'
};
    return(
            <div>
                <NavBar/>
               <SideBar/>
               <div className="bg" style={backgroundImageStyle}>
               <div style={{display:"flex", width:"1000px",marginLeft:"180px",paddingTop:"100px"}}>
      <div className="cakes-container" >
      <h2 className="font" style={{textAlign:"center"}}><img className="logout"src={invitation}></img></h2>
        <p>We offer various invitation designs for Birthday Events.The designs we offer are flip cards, flat cards,cover cards, gift cards</p>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout"src={cake}></img></h2>
      <p>We offer various invitation designs for Birthday Events.The designs we offer are flip cards, flat cards,cover cards, gift cards</p>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout"src={camera}></img></h2>
      <p>We offer various invitation designs for Birthday Events.The designs we offer are flip cards, flat cards,cover cards, gift cards</p>
      </div>
      </div>
      <div style={{display:"flex", width:"1000px",marginLeft:"180px",paddingTop:"60px",height:"240px"}}>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout"src={menu}></img></h2>
      <p>We offer various invitation designs for Birthday Events.The designs we offer are flip cards, flat cards,cover cards, gift cards</p>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout"src={halls}></img></h2>
      <p>We offer various invitation designs for Birthday Events.The designs we offer are flip cards, flat cards,cover cards, gift cards</p>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout"src={decoration}></img></h2>
      <p>We offer various invitation designs for Birthday Events.The designs we offer are flip cards, flat cards,cover cards, gift cards</p>
      </div>
            </div>
            </div>
            </div>
    );
}
export default Services;