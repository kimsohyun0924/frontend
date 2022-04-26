// import Header from "./layouts/Header"
// import Content from "./layouts/Content"
// import React from 'react';
// import Hello from './Hello'
// import './App.css'
// ;
// function App() {
//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div>
//         <Content />
//       </div>
//     </>
//   )
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import DBserver from './pages/DBserver';
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/DBserver" element={<DBserver/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}
export default App;