import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Faculty from './components/Faculty/faculty.jsx';
//import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/forum/Login.jsx';
import AIML from './components/Branches/aiml.jsx';
import CS from './components/Branches/cs.jsx';
import CSIT from './components/Branches/csit.jsx';
import DS from './components/Branches/ds.jsx';
import Infrastructure from './components/infrastructure/Infrastructure.jsx';
import Contactus from './components/contact-us/Contactus.jsx';
import Club from './components/Happenings/club.jsx';
import DevelopmentTeam from './components/development-team/DevelopmentTeam.jsx';
import Footer from './components/footer.jsx';


function App() {
  return (
    <> 
     <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>}/>       
          <Route path="/faculty" element={<Faculty/>}/>  
          <Route path="/login" element={<Login/>}/> 
          <Route path="/aiml" element={<AIML/>}/>
          <Route path="/cs" element={<CS/>}/>
          <Route path="/csit" element={<CSIT/>}/>
          <Route path="/ds" element={<DS/>}/>
          <Route path='/infrastructure' element={<Infrastructure/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path="/club" element={<Club/>}/>  
          <Route path="/development-team" element={<DevelopmentTeam/>}/>
        </Routes>
      <Footer/>
      </>
      

  );
}

export default App;
