// import './table.css';
import React, { useMemo } from 'react';
import { useBlockLayout, useTable } from 'react-table';
import { useSticky } from 'react-table-sticky';
import { Styles } from './TableStyles';
import styled from 'styled-components';

//redux-store에 저장되어 있는 data 가져옴
import { useSelector } from 'react-redux';
//redux + action
import { getlist } from 'redux/reducerSlice'

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

export default function StickyTable() {
    const count = useSelector(getlist);
    //useMemo사용하여 처음 한 번만 렌더됨
    const columns = useMemo(() => columnData, []);
    // const data = useMemo(() => count, []); 
    const data = count; 

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    useBlockLayout,
    useSticky,
  );

  const firstPageRows = rows.slice(0, 20);

  const StickyTableWrapper = styled.div`
    width: 100%;
    display: flex;
  `;

  return (
    <StickyTableWrapper>
      <Styles>
        <div
          {...getTableProps()}
          className="table sticky"
          style={{ height: '400px' }}
        >
          <div className="header">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="th">
                    {column.render('Header')}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="body">
            {firstPageRows.map((row) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render('Cell')}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Styles>
    </StickyTableWrapper>
  );
}