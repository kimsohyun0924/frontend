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


// import React, { useRef, useState } from 'react';
// import CreateUser from './CreateUser';
// import UserList from './UserList'


// function App() {

//   const [inputs, setInputs] = useState({
//     username:'',
//     email:''
//   });

//   const {username, email} = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name] :value
//     });
//   };

//   const [users, setUsers]= useState([
//     {
//         id : 1,
//         username : 'user1',
//         email : 'user1@example.com',
//         active : true,
//     },
//     {
//         id : 2,
//         username : 'user2',
//         email : 'user2@example.com',
//         active : false,
//     },
//     {
//         id : 3,
//         username : 'user3',
//         email : 'user3@example.com',
//         active : false,
//     }
//   ]);


//   const nextId = useRef(4);

//   const onCreate = () => {
//     const user = {
//       id : nextId.current,
//       username,
//       email,
//     };
//     setUsers([...users, user]);
    
//     setInputs({
//       username :'',
//       email:''
//     });
//     nextId.current += 1;
//   };

//   const onRemove = id => {
//     setUsers(users.filter(user => user.id !== id));
//   }

//   const onToggle = id => {
//     setUsers(users.map(
//       user => user.id === id ? {...user, active: !user.active} : user 
//     ));
//   }
  

//   return (
//     <>
//       <CreateUser 
//         username={username} 
//         email={email} 
//         onChange={onChange} 
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
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


