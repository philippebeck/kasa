import React from 'react';
import ReactDOM from 'react-dom/client';
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
    <BrowserRouter basename="/kasa">
      <Nav />

      <Routes>
        <Route exact path="/"            element={<Home />} />
        <Route exact path="/housing/:id" element={<Housing />} />
        <Route exact path="/about"       element={<About />} />
        <Route       path="*"            element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
