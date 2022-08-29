import React, { useEffect, useState, useRef } from 'react';
import { PageTitle, PageSubTitle } from 'style/PageStyle';
import { Routes, Route, Link } from 'react-router-dom';
import MainContainer from 'layouts/MainContainer';
import MainHeader from 'components/MainHeader';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Resource from 'pages/Resource/Resource';
import Stage from 'pages/Stage/Stage';
import { useLocation } from "react-router";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';


const HeadDiv = styled.div`
`;

const MainDiv = styled.div`
  padding: 10px 0px 10px 0px;
`;

const TSS = styled(Tabs)`
  && {
    min-height: 35px;

  }
`;

const TS = styled(Tab)`
  && {
    font-size: 13px;
    margin: 0px 7px 0px 0px;
    padding: 0px 5px 0px 5px;
    color: black;
    background-color: #f4f4f4;
    min-height: 35px;
  }
`;

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
 
export default function ApiOperation() {


    const [value, setValue] = useState('0');
    const navigate = useNavigate();
    const { state } = useLocation();

  
    const serviceInfo =  {
      "service_id": "630c3fab0ac4a236cc577ddf",
      "mem_sq": "Memsq07",
      "name": "Sso",
      "description": "Sso",
      "root_resource_id": "630c3faa0ac4a236cc577dde",
      "created_at": "2022-08-29T13:25:15.009",
      "updated_at": "2022-08-29T13:26:20.756"
  };

    
  
    const handleChange = (event, newValue) => {
        // console.log(newValue);
        setValue(newValue);
    };

    useEffect(() => {
    
    }, []);

    return ( 
        <React.Fragment>
            <MainContainer>
      
                <HeadDiv>
                  <MainHeader location={"APIs"}/>
                  <PageTitle>{serviceInfo.name}</PageTitle>
                </HeadDiv>

                <MainDiv>
                    {/* <Box sx={{ width: '100%' }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                              <TSS value={value} onChange={handleChange} aria-label="basic tabs example">
                                  <TS label="리소스" value="0" />
                                  <TS label="스테이지" value="1" />
                                  <TS label="게이트웨이 응답" value="2" />
                                  <TS label="모델" value="3" />
                              </TSS>
                          </Box>
                          <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="0" >
                              <Resource serviceInfo={state}/>  
                          </TabPanel>
                          <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="1" >
                              <Stage serviceInfo={state}/> 
                          </TabPanel>
                          <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="2">
                              <div style={{width:"100%", height:"73vh"}}>Item Three</div>
                          </TabPanel>
                          <TabPanel sx={{padding: '5px 0px 0px 0px'}} value="3" >
                              Item Four
                          </TabPanel> 
                        </TabContext> 
                    </Box> */}
                  <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                      <LinkTab value="0" label="리소스" to="/api/operation/resource" />
                      <LinkTab value="1" label="스테이지" to="/api/operation/stage" />
                    </Tabs>
                  </Box>
                  <Routes>
                    <Route path='/resource' element={<Resource serviceInfo={serviceInfo}/>} />
                    <Route path='/stage' element={<Stage/>} />
                  </Routes>
                </MainDiv> 
            </MainContainer>
        </React.Fragment>
        
    );
}

