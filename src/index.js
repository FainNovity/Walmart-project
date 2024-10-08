import React from 'react';
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
  
  return( 
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<><Navbar /><Outlet /></>} >
          <Route index element={<Home />} />
          <Route path='/home/contact' element={<Contact />} />
          <Route path='/home/cart' element={<Cart />} />
          <Route path='/home/admin/products' element={<ProductsList />} />
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
