// import logo from './logo.svg';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import LoginSignUp from './Pages/LoginSignup';
import Shop from './Pages/shop';
import Shopcategory from './Pages/shopcataegory';
import Product from './Pages/product';
import Cart from './Pages/cart';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids from './Components/Assets/banner_kids.png'
// import (BrowserRouter,Routes,Route) from 'react-router-dom'
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kids} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
       
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
