import * as React from 'react';
import { useLocation } from "react-router";
import { Routes, Route, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

function LinkTab(props) {
  return (
    <Tab component={Link}
      onClick={(event) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function TabDiv() {

    const { state } = useLocation();
    console.log(state);
    const [value, setValue] = React.useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab value="0" label="Page One" to="/mytab/firstpage" />
                    <LinkTab value="1" label="Page Two" to="/mytab/secondpage" />
                </Tabs>
            </Box>
            <Routes>
                <Route path='/firstpage' element={<FirstPage/>} />
                <Route path='/secondpage' element={<SecondPage/>} />
            </Routes>
        </React.Fragment>
    );
}
