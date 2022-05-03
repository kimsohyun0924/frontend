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


// import React, { useRef, useState, useMemo, useCallback } from 'react';
// import CreateUser from './CreateUser';
// import UserList from './UserList'

// function countActiveUsers(users) {
//   console.log('활성 사용자 수 세는 중...');
//   return users.filter(user => user.active).length;
// }

// function App() {

//   const [inputs, setInputs] = useState({
//     username:'',
//     email:''
//   });

//   const {username, email} = inputs;
//   const onChange = useCallback (e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name] :value
//     });
//     //inputs가 바뀔 때만 새로운 함수가 만들어지고 그렇지 않으면 함수가 재사용 된다.
//   }, [inputs]);

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

//   const onCreate = useCallback(() => {
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
//   }, [username, email, users]);

//   const onRemove = useCallback (id => {
//     setUsers(users.filter(user => user.id !== id));
//   }, [users]);

//   const onToggle = useCallback (id => {
//     setUsers(users.map(
//       user => user.id === id ? {...user, active: !user.active} : user 
//     ));
//   }, [users]);
  
//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateUser 
//         username={username} 
//         email={email} 
//         onChange={onChange} 
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
//       <div>활성 사용자 수 : {count}</div>
//     </>
    
//   )
// }

// export default App;


// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Home from './pages/Home';
// import DBserver from './pages/DBserver';
// import Contact from './pages/Contact';
// function App() {
//   return (
//     <>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/Dashboard" element={<Dashboard/>} />
//         <Route path="/DBserver" element={<DBserver/>} />
//         <Route path="/Contact" element={<Contact/>} />
//       </Routes>
//     </Router>
//     </>
//   );
// }
// export default App;

import TopSection from "./components/TopSection";
import './App.css';
import LeftColumn from "./components/LeftColumn";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contents from "./components/Contents";
import ApiMgmt from "./components/ApiMgmt";
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import DBserver from './pages/DBserver';


function App() {
  return (
    <>
    <TopSection />
    <LeftColumn/>
    {/* <Contents/> */}
    <ApiMgmt />
    </>
  );
}

export default App;


