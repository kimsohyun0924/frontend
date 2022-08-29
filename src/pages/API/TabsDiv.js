// import React, { useEffect, useState, useRef } from 'react';
// import styled, { css } from 'styled-components';

// import { useNavigate } from 'react-router';
// import { Routes, Route } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';

// import Resource from 'pages/Resource/Resource';
// import Stage from 'pages/Stage/Stage';

// const TSS = styled(Tabs)`
//   && {
//     min-height: 35px;

//   }
// `;

// const TS = styled(Tab)`
//   && {
//     font-size: 13px;
//     margin: 0px 7px 0px 0px;
//     padding: 0px 5px 0px 5px;
//     color: black;
//     background-color: #f4f4f4;
//     min-height: 35px;
//   }
// `;

// export default function NavTabs(props) {
//   const [value, setValue] = React.useState("0");
//   const navigate = useNavigate();

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <React.Fragment>
//         <Box sx={{ width: '100%' }}>
//             <TabContext value={value}>
//                 <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
//                     <TSS value={value} onChange={handleChange} aria-label="basic tabs example">
//                         <TS label="리소스" value="0" />
//                         <TS label="스테이지" value="1" />
//                         <TS label="게이트웨이 응답" value="2" />
//                         <TS label="모델" value="3" />
//                     </TSS>
//                 </Box>
//                 <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="0" >
//                     <Resource serviceInfo={props.serviceInfo}/>  
//                     {/* { navigate('/api/operation/resource', {state : props.serviceInfo}) }  */}
//                 </TabPanel>
//                 <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="1" >
//                     <Stage serviceInfo={props.serviceInfo}/> 
//                     {/* { navigate('/api/operation/stage', {state : props.serviceInfo}) }  */}
//                 </TabPanel>
//                 <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="2">
//                     <div style={{width:"100%", height:"73vh"}}>Item Three</div>
//                 </TabPanel>
//                 <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="3" >
//                     Item Four
//                 </TabPanel> 
//             </TabContext> 
//         </Box> 

//         {/* <Routes>
//             <Route path="/api/operation/resource" element={<Resource/>}></Route>
//         </Routes>  */}
//     </React.Fragment>
//   );
// }


import * as React from 'react';
import { useLocation } from "react-router";
import { Routes, Route, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Resource from 'pages/Resource/Resource';
import Stage from 'pages/Stage/Stage';

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

export default function TabDiv(props) {


  const serviceInfo = props.serviceInfo;

  console.log(props.serviceInfo);

    const [value, setValue] = React.useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab value="0" label="리소스" to="/api/operation/resource" />
                    <LinkTab value="1" label="스테이지" to="/api/operation/stage" />
                </Tabs>
            </Box>
            <Routes>
                <Route path='/resource' element={<Resource serviceInfo={props.serviceInfo}/>} />
                <Route path='/stage' element={<Stage/>} />
            </Routes>
        </React.Fragment>
    );
}

