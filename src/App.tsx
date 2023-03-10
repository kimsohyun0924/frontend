import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { platformEnv } from 'data/initial_data';
// import Sidebar from './page/sidebar';
import Sidebar from 'layouts/Sidebar';
import Header from 'layouts/Header';
import DBInstance from 'page/dbinstance/DBInstance';
import DBInstanceCreate from 'page/dbinstance/DBInstanceCreate';
import Backup from 'page/backup/Backup';
import ParameterGroup from 'page/parameterGroup/ParameterGroup';
import TokenPage from 'token/TokenPage';
import './App.css';

export default function App() {
  return (
    <React.Fragment>
        <BrowserRouter>

          <Sidebar />
          <Header />

          <Routes>
            <Route path="/dbinstance-list" element={<DBInstance />} />
            <Route path="/dbinstance-create" element={<DBInstanceCreate />} />
            <Route path="/backup" element={<Backup />} />
            <Route path="/parameter-group" element={<ParameterGroup />} />
            
            </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}
