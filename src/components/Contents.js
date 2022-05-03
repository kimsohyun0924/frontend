import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

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

function Contents() {

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
                            My APIs
                        </div>
                        <div style={{fontSize : "16px", marginTop : "5px"}}>
                            API Gateway를 관리합니다.
                        </div>
                    </div>
                    <div className="middle">
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" style={{marginRight:"20px"}}>
                                API 생성
                            </Button>
                            <Button variant="outlined" color="secondary" style={{marginRight:"10px"}}>
                                시작
                            </Button>
                            <Button variant="outlined" color="secondary">
                                정지
                            </Button>
                        </ThemeProvider>
                    </div>
                    <div className="bottom">
                        <table className="table_body"> 
                            <thead>
                                <tr>
                                    <th id="allchkbkox" style={{width:"36px"}}>
                                        <label id="labelchk" className="chkwrap">
                                            <input id="allchk" type="checkbox" className="chkbox"/>      
                                        </label>
                                    </th>
                                    <th style={{fontSize : "12px",  fontWeight: "normal"}}>
                                        <span>
                                            이름
                                            <img className="sort_img" src="/Table_Sort_Down.svg" alt="" style={{margin:"0px 0px 0px 6px"}}/>
                                        </span>
                                    </th>
                                    <th style={{fontSize : "12px",  fontWeight: "normal"}}>
                                        <span>
                                            설명
                                            <img className="sort_img" src="/Table_Sort_Down.svg" alt="" style={{margin:"0px 0px 0px 6px"}}/>
                                        </span>
                                    </th>
                                    <th style={{fontSize : "12px",  fontWeight: "normal"}}>
                                        <span>
                                            ID
                                            <img className="sort_img" src="/Table_Sort_Down.svg" alt="" style={{margin:"0px 0px 0px 6px"}}/>
                                        </span>
                                    </th>
                                    <th style={{fontSize : "12px",  fontWeight: "normal"}}>
                                        <span>
                                            생성 일시
                                            <img className="sort_img" src="/Table_Sort_Down.svg" alt="" style={{margin:"0px 0px 0px 6px"}}/>
                                        </span>
                                    </th>              
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="first ac" id="text_num">
                                        <label id="list_check" className="chkwrap lishchkbox">
                                            <input id="chkmultich" type="checkbox" name="contentsList"className="chkbox"/>      
                                        </label>
                                    </td>
                                    <td>PetStore</td><td>Your first API with KT Cloud.</td><td>id_1</td><td>2022/04/29 15:20:20</td>
                                </tr>
                                <tr>
                                    <td className="first ac" id="text_num">
                                        <label id="list_check" className="chkwrap lishchkbox">
                                            <input id="chkmultich" type="checkbox" name="contentsList"className="chkbox"/>      
                                        </label>
                                    </td>
                                    <td>myapi</td><td>Your api hi</td><td>id_2</td><td>2022/04/19 16:20:20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contents;