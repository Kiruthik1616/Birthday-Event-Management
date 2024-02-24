import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import '../assets/css/Theme.css'
import twod from '../assets/images/2d.jpg';
import threed from '../assets/images/3d.jpg';
import baloon from '../assets/images/baloon.jpg';
import baby from '../assets/images/baby.jpg';
import teen from '../assets/images/teen.jpg'
import couple from '../assets/images/couple.jpg';
import bg from '../assets/images/bg.jpg';
function Theme()
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
               <div style={{display:"flex", width:"1000px",height:"500px",marginLeft:"100px",paddingTop:"100px"}}>
      <div className="cakes-container1" >
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={twod}></img></h2>
      <h1>2D THEMES</h1>
        <p>We provide high-quality 2D Themes for all Birthday Party needs. We have varieties of 2D themes for kids, girls and boys and also have concept based themes to make your birthday party decorations unique and customized. 2D Themes for birthdays are the most cost-effective and affordable way of decorations.</p>
      </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={threed}></img></h2>
      <h1>3D THEMES</h1>
      <p>Why just celebrate in a simple way, do it in a very dreamful way and plan it by your way. We are here only for you. MAKE MY EVENT organises the cradle ceremony in whatever way you need. We organise your Birthday Party in the cutest styles and themes to make it memorable for your child and for you.</p>
      </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={baloon}></img></h2>
      <h1>BALOON THEMES</h1>
      <p>We offer a wide range of balloon decorations for Birthday Parties. We can design the balloon themes as per your choice, colours and requirements. Our balloon decorations include balloon arches, balloon twisters, balloon walls, balloon pillars and many custom designs using balloons.</p>
      </div>
      </div>
      <div style={{display:"flex", width:"1000px",marginLeft:"100px",paddingTop:"60px",height:"500px"}}>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={baby}></img></h2>
      <h1>BABY THEMES</h1>
      <p>We provide high-quality Baby Themes for all Birthday Party needs. We have varieties of Baby themes for kids, girls and boys and also have concept based themes to make your birthday party decorations unique and customized. Baby Themes for birthdays are the most cost-effective and affordable way of decorations.</p>
      </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={couple}></img></h2>
      <h1>COUPLE THEMES</h1>
      <p>We offer a wide range of couple decorations for Birthday Parties. We can design the couple themes as per your choice, colours and requirements. Our couple decorations include balloon arches, balloon twisters, candle lights, heartins and many custom designs using balloons.</p>
      </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={teen}></img></h2>
      <h1>TEEN THEMES</h1>
      <p>Why just celebrate in a simple way, do it in a very dreamful way and plan it by your way. We are here only for you. MAKE MY EVENT organises the cradle ceremony in whatever way you need. We organise your Birthday Party in the cutest styles and themes to make it memorable for your child and for you.</p>
      </div>
            </div>
            </div>
            </div>
    );
}
export default Theme;