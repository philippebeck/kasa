import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Housing from './pages/housing/housing';
import About from './pages/about/about';
import Error from './pages/error/error';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import logo from './assets/nav.webp';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav src={logo} alt="Logo Kasa" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer brand="Kasa" />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
