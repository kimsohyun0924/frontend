import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useLocation } from "react-router";

import styled, { ThemeProvider } from 'styled-components';
import { PageTitle } from 'style/PageStyle';
import MainContainer from 'layouts/MainContainer';

import Stage from 'pages/Stage/Stage';
import Resource from 'pages/Resource/Resource';

import Button from 'components/Button';
import MainHeader from 'components/MainHeader';
import ModalStageDeploy from 'components/ModalStageDeploy'


import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

const HeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
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
    <TS component={Link}
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
    const [selectItem, setSelectItem] = useState(null);
    const [createDialog, setCreateDialog] = useState(false);
  //   const serviceInfo =  {
  //     "service_id": "630c3fab0ac4a236cc577ddf",
  //     "mem_sq": "Memsq07",
  //     "name": "Sso",
  //     "description": "Sso",
  //     "root_resource_id": "630c3faa0ac4a236cc577dde",
  //     "created_at": "2022-08-29T13:25:15.009",
  //     "updated_at": "2022-08-29T13:26:20.756"
  // };
  const [serviceInfo, setServiceInfo] = useState(state);

    const handleChange = (event, newValue) => {
        // console.log(newValue);
        setValue(newValue);
    };

    const ModalCreateDialog = () => {
      setCreateDialog(true);
    };

    const onCancel = () => {
      console.log('취소');
      setCreateDialog(false);
    };

    // useEffect(() => {
    // setServiceInfo(state);
    // }, []);

    return ( 
        <React.Fragment>
            <MainContainer>
              <MainHeader location={"APIs"}/>
                <HeadDiv>
                  <PageTitle>{serviceInfo.name}</PageTitle>
                  <div style={{padding: "43px 0px 0px 0px"}}>
                    <ThemeProvider theme={{ palette: { blue: '#141e49', gray: '#495057', pink: '#f06595' }}}>
                      <Button size="supersmall" line="line" onClick={ModalCreateDialog}>API 배포</Button>      
                    </ThemeProvider>
                  </div>
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
                  <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                    <TSS value={value} onChange={handleChange} aria-label="nav tabs example">
                      <LinkTab value="0" label="리소스" to="/api/operation/resource" />
                      <LinkTab value="1" label="스테이지" to="/api/operation/stage" />
                    </TSS>
                  </Box>
                  <Routes>
                    <Route path='/resource' element={<Resource serviceInfo={serviceInfo}/>} />
                    <Route path='/stage' element={<Stage serviceInfo={serviceInfo}/>} />
                  </Routes>
                </MainDiv> 
            </MainContainer>
            {/* <ModalStageDeploy
              title="API를 배포합니다."
              confirmText="배포"
              cancelText="취소"
              onCancel={onCancel}
              serviceId={state.service_id}
              selectItem={selectItem} 
              setSelectItem={setSelectItem}
              setCreateDialog={setCreateDialog}
              visible={createDialog}>
            </ModalStageDeploy> */}
        </React.Fragment>
        
    );
}

