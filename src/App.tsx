import React from 'react';
import './App.css';
import { Routes, Route, useResolvedPath } from "react-router-dom";

//components
import Navibar from './components/navibar';
import Footer from './components/footer';

//pages
import Home from './views/home';
import PageNotFound from './views/PageNotFound';

function App() {
  console.log(useResolvedPath("").pathname);

  return (
    <div className="App min-h-screen">
      <Navibar />
      <div className="mt-16">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
