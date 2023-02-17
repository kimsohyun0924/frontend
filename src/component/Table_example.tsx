import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Table_Search from '../Table_Search.svg';
//redux-store에 저장되어 있는 data 가져옴
import { useSelector } from 'react-redux';
//redux + action
import { getlist } from '../redux/reducerSlice' 


interface orderbyName {
    name : string;
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
const TH = styled.th<orderbyName>`
    &:hover {
        cursor: pointer;
    }
`;

//data에 대한 type 선언
type service = {
    created_at: string,
    description: string,
    name: string,
    root_resource_id: string,
    service_id: string,
    service_status: string,
    stage_list: string,
    updated_at: string,
    user_id: string
}

//columData, column에 대한 이름과 Header에 쓰일 column 선언 
const columnData = [
        'created_at',
        'description',
        'name',
        'root_resource_id',
        'service_id',
        'service_status',
        'updated_at',   
        'user_id'
    ]

export default function Table() {

    const count = useSelector(getlist);
    const [searchData, setSearchData] = useState(count);
    //useMemo사용하여 처음 한 번만 렌더됨
    const columns = useMemo(() => columnData, []);
    // const data = useMemo(() => count, []);     

    const onChange = (e: any) => {
        const { name, value } = e.target;
    
        if(name === 'search') {
          if(value === "") {
            setSearchData([...count]);
          }
          else {
            let temp = count.filter((v: { name: string | any[]; user_id: string | any[]; }) => (v.name) && (v.name.includes(value) ));
            setSearchData([...temp]);
          }
     
        } 
      }

      const onClick = (e: any) => {
          console.log("sorting");
      };

    return (
        <React.Fragment> 
            <ItemInput>
                <InputSearch name='search' onChange={onChange} />
                <ItemSearch>
                    <img src={Table_Search} alt='search' width='16' />
                </ItemSearch>           
            </ItemInput>  
            <table className="table">
                <thead>
                    <tr>
                        { columns && columns.map((item: any, index: number) => {
                            return  (
                                <React.Fragment key={index}>
                                    <TH onClick={onClick} name={item}>{item}</TH>
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
                                    { columns && columns.map((item2: any, index2: number) => { 
                                        return  (
                                            <React.Fragment key={index2}>
                                                <th style={{fontWeight:"500"}}>{item[item2]}</th>  
                                            </React.Fragment>
                                        );
                                    })}
                                </tr>
                            </React.Fragment>
                        );                              
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}