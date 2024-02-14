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
        <Route path="/zlb-opti/home" element={<Home />} />
        <Route path="/zlb-opti/about" element={<About />} />
        <Route path="/zlb-opti/result" element={<Result />} />
        <Route path="/zlb-opti/buy" element={<Buy />} />
        <Route path="/zlb-opti/other" element={<Other />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;