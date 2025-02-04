import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
     <Route path='/' element={<LandingPage/>}/> 
     <Route path='/home' element={<Home/>}/>
     <Route path='/education' element={<Education/>}/>
     <Route path='/experience' element={<Experience/>}/>
     <Route path='/skills' element={<Skills/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
      </Layout>
    </Router>
  
  );
}

export default App;
