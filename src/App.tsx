import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './page/sidebar';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import APIs from './page/apis';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>

          <Sidebar />
          <Header />

          <Routes>
            <Route path="/apigw-list" element={<APIs />} />
           {/* <Route path="/*" element={<Sidebar />} />       */}
            </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
