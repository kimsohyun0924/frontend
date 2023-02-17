import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './page/sidebar';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Sidebar />} />      
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
