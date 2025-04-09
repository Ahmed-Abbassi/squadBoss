import Login from './pages/login/Login';
import Signup from './pages/Signup/Signup.tsx';
import {Provider} from './components/ui/provider';
import {Routes, Route } from "react-router";
import LandingPage from './pages/landingPage/LandingPage';
import Home from './pages/Home/Home';
import ContactUs from './pages/contactus/ContactUs';
import AboutUs from './pages/aboutus/AboutUs';
import Pricing from './pages/pricing/Pricing';
import NoMatch from "./pages/page404/NoMatch.tsx";
function App() {
  return (
    <Provider>
      <Routes>
        {
          //public routes
        }
        <Route index path='/' element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/signup' element={<Signup/>} />
        <Route  path='/contact' element={<ContactUs />} />
        <Route  path='/about' element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path={"*"} element={<NoMatch/>}/>


        {
        //protected routes
        }
        <Route index path='/app' element={<LandingPage />} />
      </Routes>    
    </Provider>
  );
}

export default App;