import { Route, Routes} from 'react-router-dom';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import Register from './component/Register';
import Product from './component/Product';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      </div>
  );
}

export default App;
