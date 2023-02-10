import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './page/sidebar';
import './App.css';

import MainPage from './page/mainPage';

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
