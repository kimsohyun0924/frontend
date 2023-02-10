import React, { useMemo } from 'react';

//redux-store에 저장되어 있는 data 가져옴
import { useSelector } from 'react-redux';
//redux + action
import { getlist } from '../redux/reducerSlice' 

//react-table 이용
import { useTable } from 'react-table';

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
    'stage_list',
    'updated_at',
    'user_id'
]

export default function Table() {

    const count= useSelector(getlist);
    //useMemo사용하여 처음 한 번만 렌더됨
    const columns = useMemo(() => columnData, []);
    const data = useMemo(() => count, []);
        
    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });


//     return (
//         <table {...getTableProps()}> 
//             {/* thead - cloumn(테이블의 header부분) */}
//             <thead>
//                 {headerGroups.map((headerGroup) => (
//                     <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                         <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//                     ))}
//                     </tr>
//                 ))}
//             </thead>
//             {/* tbody - data(테이블의 body부분) */}
//             <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                 <tr {...row.getRowProps()}>
//                     {row.cells.map((cell) => (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     ))}
//                 </tr>
//                 );
//             })}
//             </tbody>
//         </table>
//     );
// }

    return (
        <React.Fragment> 
            <table className="table">
                <thead>
                    <tr>
                        { columns && columns.map((item, index) => {
                            return  (
                                <React.Fragment key={index}>
                                    <th>{item}</th>
                                </React.Fragment>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {/* { columns && columns.map((item: any, index: number) => {
                        return(
                            <React.Fragment key={index}> */}
                                { data && data.map((item2: any, index2: number) => {
                                    return  (
                                        <React.Fragment key={index2}>
                                            <tr>
                                                <th>{item2.service_id}</th>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })}
                            {/* </React.Fragment> */}
                        {/* );
                    })} */}
                </tbody>
            </table>
        </React.Fragment>
    );
}