import './App.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className='navBar'>

        <Link to="/"><span>Kalvium❤️</span></Link>
        <div id='info'>
        <span><Link to="/Contact">Contact</Link></span>
       <span> <Link to="/About">About</Link></span>
        </div>
        
          

      </div>

      <Routes id ="route">
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>

    </div>
  );
}

export default App;
