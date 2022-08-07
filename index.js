import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './App';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path= "home" element = {<Home />}></Route>
    <Route path= "about" element = {<About />}></Route>
    <Route path= "menu" element = {<Menu />}></Route>
    <Route path= "contact" element = {<Contact />}></Route>
    <Route path= "gallery" element = {<Gallery />}></Route>
  </Routes>
  </BrowserRouter>
);