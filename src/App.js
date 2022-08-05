import React , {useEffect} from 'react';
import './Assets/Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Screens/Home';
import { Routes, Route } from "react-router-dom";
import Faq from './Screens/Faq';
import SignUp from './Screens/Signup';
import SignIn from './Screens/Signin';
import EditProfile from './Screens/EditProfile';
import PublicProfile from './Screens/PublicProfile';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/publicprofile' element={<PublicProfile />} />
      </Routes>
    </div>
  );
}

export default App;
