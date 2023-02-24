import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './page/sidebar';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Lists from './page/list';
import DBInstanceCreate from './page/DBInstanceCreate';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>

          <Sidebar />
          <Header />

          <Routes>
            <Route path="/dbinstance-list" element={<Lists />} />
            <Route path="/dbinstance-create" element={<DBInstanceCreate />} />

           {/* <Route path="/*" element={<Sidebar />} />       */}
            </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
