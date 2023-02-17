import React, { useMemo } from 'react';
import styled from 'styled-components';
import Table_Search from '../Table_Search.svg';
import TableLine from '../tableline.png';

//redux-store에 저장되어 있는 data 가져옴
import { useSelector } from 'react-redux';
//redux + action
import { getlist } from '../redux/reducerSlice' 
//react-table
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";

const ItemInput = styled.div`
  padding: 1rem 0;
  display: flex;
`;

const InputSearch = styled.input`
  width: 200px;
  border: solid 1px #ccc;
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
`;

const TH = styled.th`
    line-height: 18px;
    vertical-align: middle;
    padding: 10px 10px;
    font-weight: 400;
    font-size: 14px;
    text-align: left;

    &:not(:last-child) {
        background: white url(${TableLine}) right 50% no-repeat;
    }
`;

const TD = styled.td`
    line-height: 20px;
    vertical-align: middle;
    padding: 8px 10px;
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    border-top: 1px solid #ccc;
`;

const PaginationOptions = styled.div`
  margin: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
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
    {
        accessor: 'created_at',
        Header: 'created_at',
    },
    {
        accessor: 'description',
        Header: 'description',
    },
    {
        accessor: 'name',
        Header: 'name',
    },
    {
        accessor: 'root_resource_id',
        Header: 'root_resource_id',
    },
    {
        accessor: 'service_id',
        Header: 'service_id',

    },
    { 
        accessor: 'service_status',
        Header: 'service_status',
    },
    { 
        accessor: 'updated_at',
        Header: 'updated_at',
    },
    {
        accessor: 'user_id',
        Header: 'user_id'
    }
]

export default function Table() {

    const count = useSelector(getlist);
    //useMemo사용하여 처음 한 번만 렌더됨
    const columns = useMemo(() => columnData, []);
    // const data = useMemo(() => count, []); 
    const data = count;     
       

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
      } = useTable({ columns, data, initialState: { pageIndex: 0, }, }, useGlobalFilter, useSortBy, usePagination,);

      const { globalFilter } = state;
      const { pageIndex, pageSize } = state;

    //react-table을 이용한 경우
    return (
        <React.Fragment>
            <ItemInput>
                <InputSearch name='search' value={globalFilter || ""} onChange={(e) => setGlobalFilter(e.target.value)} />
                <ItemSearch>
                    <img src={Table_Search} alt='search' width='16' />
                </ItemSearch>           
            </ItemInput>  
            <div style={{border: '1px solid #ccc'}}>
                <TableDiv {...getTableProps()}> 
                    {/* thead - cloumn(테이블의 header부분) */}
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TH {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                </TH>
                            ))}
                            </tr>
                        ))}
                    </thead>
                    {/* tbody - data(테이블의 body부분) */}
                    <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                            <TD {...cell.getCellProps()}>{cell.render("Cell")}</TD>
                            ))}
                        </tr>
                        );
                    })}
                    </tbody>
                </TableDiv>
            </div>
            <PaginationOptions>
                <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
                </span>
                <span>
                Rows per page:{' '}
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    style={{ border: 'none', background: '#EFEFEF', width:'45px', height:'25px', fontSize:'14px', padding: '5px 5px 5px 5px'}}
                >
                    {[5, 10, 15].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                    ))}
                </select>
                </span>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
            </PaginationOptions>
        </React.Fragment>
    );
}