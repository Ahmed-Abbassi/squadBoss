import Login from './pages/login/Login';
import Signin from './pages/Signin/Signin';
import {Provider} from './components/ui/provider';
import {Routes, Route } from "react-router";
import Home from './pages/home/Home'
function App() {
  return (
    <Provider>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/login' element={<Login />} />
        <Route index path='/signin' element={<Signin />} />
      </Routes>    
    </Provider>
  );
}

export default App;