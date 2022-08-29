// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link, Route, Routes } from 'react-router-dom';
// import Profile from './Profile';
// import FirstPage from './FirstPage';
// import SecondPage from './SecondPage';

// const Profiles = () => {

//     const navigate = useNavigate();

//     const onClick = () => {
//         navigate('/profiles/velopert');
//     }

//     return (
//         <div>
//         <h3>유저 목록:</h3>
//         <ul>
//             <li>
//             <button onClick={onClick}>velopert</button>
//             </li>
//             <li>
//             <Link to="/profiles/gildong">gildong</Link>
//             </li>
//         </ul>

//         <Routes>
//             {/* <Route path='/' element='유저를 선택해주세요' /> */}
//             <Route path='/velopert' element={<FirstPage/>} />
//             <Route path='/gildong' element={<SecondPage/>} />
//         </Routes>
//         </div>
//     );
// };

// export default Profiles; 


import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';

import { Link, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
        <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab value="0" label="Page One" href="/profiles/velopert" />
                    <LinkTab value="1" label="Page Two" href="/profiles/gildong" />
                </Tabs>
            </TabContext>
        </Box>
        <Routes>
            <Route path='/velopert' element={<FirstPage/>} />
            <Route path='/gildong' element={<SecondPage/>} />
         </Routes>
    </React.Fragment>
  );
}
