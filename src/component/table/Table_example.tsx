import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import TableLine from 'tableline.png';
import Table_Search from 'Table_Search.svg';
//redux-store에 저장되어 있는 data 가져옴
import { useSelector } from 'react-redux';
//redux + action
import { getlist } from 'redux/reducerSlice' 

interface orderbyName {
    name? : string;
}

const ItemInput = styled.div`
  padding: 1rem 0;
  display: flex;
`;

const InputSearch = styled.input`
  width: 200px;
  border: solid 1px #aaaaaa;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
  height: 32px;
  font-size: 16px;
  color: #333333; 
  padding-left: 35px;
`;

const ItemSearch = styled.span`
  position: relative;
  right: 190px;
  top: 0px;
  color: #888888;
  padding: 7px 0px 0px 0px;
`;

const TableDiv = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    line-height: 0.8rem;
    border: 1px solid #ccc;
`;

const TH = styled.th<orderbyName>`
    line-height: 18px;
    text-align: left;
    vertical-align: middle;
    padding: 10px 10px;
    font-weight: 400;
    font-size: 14px;
    
    &:hover {
        cursor: pointer;
    }

    &:not(:last-child) {
        background: white url(${TableLine}) right 50% no-repeat;
    }
`;

const TD = styled.td`
    line-height: 20px;
    text-align: left;
    vertical-align: middle;
    padding: 8px 10px;
    font-weight: 400;
    font-size: 14px;
    border-top: 1px solid #ccc;
`;

//columData, column에 대한 이름과 Header에 쓰일 column 선언 
const columnData = [
    {
        id: 'display_name',
        label: 'DB Instance 이름',
    },
    {
        id: 'mysqlInfo.mode',
        label: '구성 방식',
    },
    {
        id: 'vmInfo[0].vm_flavor',
        label: '서버 사양',
    },
    {
        id: 'storageInfo.volume_type',
        label: '스토리지',
    },
    {
        id: 'zone.id',
        label: 'Zone',

    },
    { 
        id: 'create_completed_time',
        label: '생성 일시',
    },
    { 
        id: 'dbaas_status',
        label: 'DB 상태',
    }
];

export default function Table() {

    const count = useSelector(getlist);
    const [searchData, setSearchData] = useState(count);
    //useMemo사용하여 처음 한 번만 렌더됨
    const columns = useMemo(() => columnData, []);
    // const data = useMemo(() => count, []);    
    const [sortBy, setSortBy] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<string>('asc'); 

    const onChange = (e: any) => {
        const { name, value } = e.target;
    
        if(name === 'search') {
          if(value === "") {
            setSearchData([...count]);
          }
          else {
            let temp = count.filter((v: { display_name: string | any[]; }) => (v.display_name) && (v.display_name.includes(value) ));
            setSearchData([...temp]);
          }
        } 
    }

    const onClick = (e: any) => {
        const name = e.target.getAttribute('name');
        
        if(name) {
          if(name === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
          } else {
            setSortBy(name);
            setSortOrder('asc');
          }
        }
        if(sortBy === '') {
            setSearchData(count);
        }
        else {
            setSearchData(count.slice().sort((a: any, b: any) => {
                const x = a[sortBy];
                const y = b[sortBy];
                if(x < y) {
                return sortOrder === 'asc' ? -1 : 1;
                }
                else if(x > y) {
                return sortOrder === 'asc' ? 1 : -1;
                }
                else {
                return 0;
                }
            }));
        }
    };

    useEffect(() => {
        setSearchData(count);
    }, [count]);

    return (
        <React.Fragment> 
            <ItemInput>
                <InputSearch name='search' onChange={onChange} />
                <ItemSearch>
                    <img src={Table_Search} alt='search' width='16' />
                </ItemSearch>           
            </ItemInput>  
            <TableDiv className="table">
                <thead>
                    <tr>
                        <TH style={{width:'1%'}}><input type="checkbox"/></TH>
                        { columns && columns.map((item: any, index: number) => {
                            return  (
                                <React.Fragment key={index}>
                                    <TH onClick={onClick} name={item.id}>{item.label}</TH>
                                </React.Fragment>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    { searchData && searchData.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <TD style={{width:'1%'}}><input type="checkbox"/></TD>
                                    <TD>{item.display_name}</TD> 
                                    <TD>{item.mysqlInfo.mode}</TD>  
                                    { item.vmInfo.length > 0 ? <TD>{item.vmInfo[0].vm_flavor}</TD>  : <TD/> }
                                    <TD>{item.storageInfo.volume_type}</TD> 
                                    <TD>{item.zone.id}</TD> 
                                    <TD>{item.create_completed_time}</TD>
                                    <TD>{item.dbaas_status}</TD>
                                    {/* { columns && columns.map((item2: any, index2: number) => { 
                                        return  (
                                            <React.Fragment key={index2}>
                                                <TD>{item[item2]}</TD>  
                                            </React.Fragment>
                                        );
                                    })} */}
                                </tr>
                            </React.Fragment>
                        );                              
                    })}
                </tbody>
            </TableDiv>
        </React.Fragment>
    );
}