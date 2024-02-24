import NavBar from "../components/NavBar"
import '../assets/css/Homecss.css'
import SideBar from "../components/SideBar";
import About from "../pages/About"
import Services from '../pages/Services'
import Menu from "./Menu";
import Theme from '../pages/Theme'
function HomePage()
{
    return(
            <div className="body">
                <NavBar/>
                <SideBar/>
                
                <About/>
                <Services/>
                <Theme/>
                <Menu/>
            </div>
    );
}
export default HomePage