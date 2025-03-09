import Login from './pages/login/Login';
import Signin from './pages/Signin/Signin';
import {Provider} from './components/ui/provider';
import {Routes, Route } from "react-router";
import LandingPage from './pages/landingPage/LandingPage';
import Home from './pages/Home/Home';
import ContactUs from './pages/contactus/ContactUs';
import AboutUs from './pages/aboutus/AboutUs';
function App() {
  return (
    <Provider>
      <Routes>
        {
          //public routes
        }
        <Route index path='/' element={<Home />} />
        <Route index path='/login' element={<Login />} />
        <Route index path='/signin' element={<Signin />} />
        <Route index path='/contact' element={<ContactUs />} />
        <Route index path='/about' element={<AboutUs />} />


        {
        //protected routes
        }
        <Route index path='/app' element={<LandingPage />} />
      </Routes>    
    </Provider>
  );
}

export default App;