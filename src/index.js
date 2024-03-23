import React    from 'react';
import ReactDOM from 'react-dom/client';
import logo     from './assets/nav.webp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home     from './pages/home/home';
import Housing  from './pages/housing/housing';
import About    from './pages/about/about';
import Error    from './pages/error/error';
import Nav      from './components/nav/nav';
import Footer   from './components/footer/footer';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Nav src={logo} alt="Logo Kasa" />

      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about"       element={<About />} />
        <Route path="*"            element={<Error />} />
      </Routes>

      <Footer brand="Kasa" />
    </BrowserRouter>
  </React.StrictMode>
);
