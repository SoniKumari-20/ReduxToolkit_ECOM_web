import './App.css';
import Navbar from './Component/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import { Cart } from './Component/Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
        <Route path='/about' element={<About />}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
