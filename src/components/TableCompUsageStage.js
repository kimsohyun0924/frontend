import React, { useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import TableLine from '../image/tableline.svg';
import { useNavigate } from 'react-router-dom';

const TableWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  overflow-x:auto;
  font-size: 15px;
  color: #333333;
  /* height: calc(100vh - 362px); */
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  line-height: 0.8rem;
  border: 1px solid #ccc;
`;

const THead = styled.thead`
`;

const TH = styled.th`
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  padding: 10px 10px;
  border-right: 0 solid #ccc;
  border-left: 0 solid #ccc;
  font-weight: 400;
  font-size: 13px;
  text-align: left;

  &:not(:last-child) {
    background: url(${TableLine}) right 50% no-repeat;
  }
`;

const TBody = styled.tbody`
  border: 1px solid #ccc;
`;

const TR = styled.tr`
  border-bottom: 1px solid #ccc;

  ${props => props.clickId === props.Id &&
    css`
      background: #c7dff4;;
      /* font-weight: 500; */
    `
  }
`;

const TD = styled.td`
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 8px 10px;
  text-align: left;
`;

export default function TableCompUsageStage({ columns, data, clickData, setClickData }) {

  const navigate = useNavigate();
  const initialState = {
    "service_name": null,
    "service_id": null,
    "stage_name": null,
    "stage_id": null,
  }

  const onClick = (item) => {
    if(item.stage_id === clickData.stage_id) {
      setClickData(initialState);
    }
    else {
      setClickData({
        "service_name": item.service_name,
        "service_id": item.service_id,
        "stage_name": item.stage_name,
        "stage_id": item.stage_id,
      });
    }
  }

  const checkHandler = (e) => {
  };

  return (
    <React.Fragment>
      <TableWrapper>
        <Table>
          <THead>  
            <tr>
              <TH width='1%'/>
              { columns.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <TH>{item}</TH>
                  </React.Fragment>
                );
              })}    
            </tr>            
          </THead>
          <TBody>
            { data && data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TR key={index} onClick={() => { onClick(item) }} clickId={clickData.stage_id} Id={item.stage_id}>
                    <TD width='1%'>
                      <input type="checkbox" checked={clickData.stage_id === item.stage_id ? true : false} onChange={checkHandler}/>
                    </TD>
                    <TD width='20%'>{item.service_name}</TD>
                    <TD width='20%'>{item.stage_name}</TD>
                  </TR> 
                </React.Fragment>
              );
            })}
          </TBody>
        </Table>
      </TableWrapper>
    </React.Fragment>
  );
}