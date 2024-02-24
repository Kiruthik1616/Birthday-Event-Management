import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import '../assets/css/Menu.css'
import buttermasala from '../assets/images/butter masala.jpg';
import parotta from '../assets/images/parotta.jpg';
import tikka from '../assets/images/panneer tikka.jpg';
import naan from '../assets/images/naan.jpg';
import roti from '../assets/images/romali roti.jpg'
import dragon1 from '../assets/images/dragon.jpg'
import grill from '../assets/images/grill.jpg';
import gobi from '../assets/images/gobi.jpg';
import bg from '../assets/images/bg.jpg';
import cake from '../assets/images/img1.jpg'
function Menu()
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
               <div style={{display:"flex", width:"1000px",height:"400px",marginLeft:"100px",paddingTop:"100px"}}>
      <div className="cakes-container1" >
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={tikka}></img></h2>
      <h1>PANNER TIKKA</h1>
         </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={naan}></img></h2>
      <h1>NAAN</h1>
      </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={gobi}></img></h2>
      <h1>GOBI MANCHURIAN</h1>
      </div>
      </div>
      <div style={{display:"flex", width:"1000px",marginLeft:"100px",paddingTop:"60px",height:"400px"}}>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={grill}></img></h2>
      <h1>GRILLED CHICKEN</h1>
       </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={dragon1}></img></h2>
      <h1>DRAGON CHICKEN</h1>
        </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={roti}></img></h2>
      <h1>ROMALI ROTI</h1>
       </div>
            </div>
            <div style={{display:"flex", width:"1000px",marginLeft:"100px",paddingTop:"60px",height:"400px"}}>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={parotta}></img></h2>
      <h1>PAROTTA</h1>
       </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={buttermasala}></img></h2>
      <h1>BUTTER MASALA</h1>
      </div>
      <div className="cakes-container1">
      <h2 className="font" style={{textAlign:"center"}}><img className="logout" style={{width:"300px",height:"200px"}}src={cake}></img></h2>
      <h1>CAKE</h1>
       </div>
            </div>
            </div>
            </div>
    );
}
export default Menu;