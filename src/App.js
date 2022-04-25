// import Header from "./layouts/Header"
// import Content from "./layouts/Content"

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


// import React from 'react';
// import InputSample from './InputSample'


// function App() {
//   return (
//     <InputSample />
//   )
// }

// export default App;


import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToExamine from './pages/ToExamine';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ToExamine" element={<ToExamine/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}
export default App;


