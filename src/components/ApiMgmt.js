import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ResourceStateButton from "./ResourceStateButton";
import ResourceCreate from './ResourceCreate';

const theme = createTheme({
    palette: {
      primary: {
        main: '#141e49',
      },
      secondary: {
          main: '#64748B',
      }
    },
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 , padding:'10px 0px 10px 0px'}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  

function ApiMgmt() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <div className="content">
                <div className="contents_sort">
                    <div className="top">
                        <div className="toptop">
                            <span>
                                <a href="" className="cprod_server" style={{fontSize:"13px"}}>API Gateway</a>
                                &gt;
                                <a href="" style={{fontSize:"14px", padding:"2px 0px 0px 5px"}}>My APIs</a>
                            </span>
                        </div> 
                        <div style={{fontSize : "32px", fontWeight:"bold"}}>
                            PetStore (id_2)
                        </div>
                        <div style={{fontSize : "16px", marginTop : "5px"}}>
                            PetStore (id_2) API를 관리합니다.
                        </div>
                    </div>
                    <div className="middle">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="리소스" {...a11yProps(0)} style={{margin:"0px 7px 0px 0px", color:"black", backgroundColor:"#f4f4f4"}}/>
                                    <Tab label="스테이지" {...a11yProps(1)} style={{margin:"0px 7px 0px 0px", color:"black", backgroundColor:"#f4f4f4"}}/>
                                    <Tab label="게이트웨이 응답" {...a11yProps(2)} style={{margin:"0px 7px 0px 0px", color:"black", backgroundColor:"#f4f4f4"}}/>
                                    <Tab label="모델" {...a11yProps(3)} style={{color:"black", backgroundColor:"#f4f4f4"}}/>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div>
                                    <ResourceStateButton/>
                                </div>
                                <div>
                                    <ResourceCreate/>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                Item Four
                            </TabPanel>   
                        </Box>
                    </div>
                    <div className="bottom">
                         
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApiMgmt;