
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import { Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}> 
        </Route>
          <Route path='/about' element={<About/>} />
      </Routes>
    
    </>

  );
}

export default App;
