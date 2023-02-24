import React, { useMemo } from 'react';
import styled from 'styled-components';
import TableLine from 'tableline.png';
import Table_Search from 'Table_Search.svg';

//redux-store에 저장되어 있는 data 가져옴
import { useSelector } from 'react-redux';
//redux + action
import { getlist } from 'redux/reducerSlice';
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
    text-align: left;
    vertical-align: middle;
    padding: 10px 10px;
    font-weight: 400;
    font-size: 14px;

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

const PaginationOptions = styled.div`
  margin: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

//columData, column에 대한 이름과 Header에 쓰일 column 선언 
const columnData = [
    {
        accessor: 'display_name',
        Header: 'DB Instance 이름',
    },
    {
        accessor: 'mysqlInfo.mode',
        Header: '구성 방식',
    },
    {
        accessor: 'vmInfo[0].vm_flavor',
        Header: '서버 사양',
    },
    {
        accessor: 'storageInfo.volume_type',
        Header: '스토리지',
    },
    {
        accessor: 'zone.id',
        Header: 'Zone',

    },
    { 
        accessor: 'create_completed_time',
        Header: '생성 일시',
    },
    { 
        accessor: 'dbaas_status',
        Header: 'DB 상태',
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
            <div style={{border: '1px solid #ccc', overflowX:'auto'}}>
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