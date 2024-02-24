 import { BrowserRouter,Route,Routes } from 'react-router-dom';
  //  import LoginForm from './pages/LoginPage';
  import Crud from './pages/crud';
 import About from './pages/About';
import HomePage from './pages/HomePage';
 import Services from './pages/Services';
 import Gallery from './pages/Gallery';
 import Price from './pages/Price';
 import Review from './pages/Review';
 import Contact from './pages/Contact';
 import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import Theme from './pages/Theme';
import Menu from './pages/Menu';
import Landing from './pages/Landing';
import Adminlogin from './pages/Adminlogin';
 

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Landing />}></Route>
    <Route exact path='/homepage' element={<HomePage/>}></Route>
     <Route path='/Services' element={<Services/>}></Route>
     <Route path='/gallery' element={<Gallery/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path="/signup" element={<SignupPage/>}></Route>
     <Route path='/price' element={<Price/>}></Route>
    * <Route path='/review' element={<Review/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route> 
     <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/loginpage' element={<LoginPage/>}></Route>
    <Route path='/Theme' element={<Theme/>}></Route> 
    <Route path='/Menu' element={<Menu/>}></Route> 
    <Route path='/Adminlogin' element={<Adminlogin/>}></Route> 
    <Route path='/Crud' element={<Crud/>}></Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
