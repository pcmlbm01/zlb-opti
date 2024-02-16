// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ZlbIndex from './pages/zlbindex/ZlbIndex';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Result from './pages/result/Result';
import Buy from './pages/buy/Buy';
import Other from './pages/other/Other';
import ErrorPage from './pages/error/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/zlb-opti" element={<ZlbIndex />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/other" element={<Other />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
