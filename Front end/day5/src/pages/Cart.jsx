import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import bg from '../assets/images/bg.jpg';
function Cart()
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
              <p> Choose a car:
                <br></br>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> </p>
            </div>
            </div>
            
    );
}
export default Cart;