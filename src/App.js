import logo from './logo.svg';
import Navbar from '../src/Components/Navbar/Navbar'
import Card from './Components/Card';

import Admin from './Admin/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Admin/AddProduct/AddProduct';
import ProductList from './Admin/ProductList';
import Landing from './Pages/Landing';


function App() {
  return (
    <div className='h-screen w-screen' >
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/admin/*' element={<Admin/>}/>
          <Route index element={<Landing/>}/>
          <Route path='/shop' element={<Landing/>}/>
          <Route path='/contact' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
