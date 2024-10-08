import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layout';
import Home from './pages/home';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProductsList from './pages/admin/products/productsList';
import Cart from './pages/cart';
import Login from './components/login';


function App(){
  const [search,setSearch] = useState("");
  return( 
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<><Navbar setSearch = {setSearch} /><Outlet /></>} >
          <Route index element={<Home search={search} />} />
          <Route path='/home/cart' element={<Cart />} />
      </Route>
          <Route path='*' element={<NotFound />} />
    </Routes>

    <Footer/>
    </BrowserRouter>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
