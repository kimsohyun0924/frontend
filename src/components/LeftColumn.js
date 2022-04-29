import React from 'react';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';


// import styled from 'styled-components';

// const topsection = styled.div`
//     background-color: black;
// `;

function LeftColumn() {
    return (
        <>
            <div className="leftcolumn">
                <nav className="side-menu">
                    <ul className="menu-bar">
                        {SidebarData.map((item, index) => {
                            return (
                                <li>
                                    <a href="#">
                                        <span>{item.title}</span>
                                    </a>
                                </li>  
                            );
                        })}
                    </ul>
                </nav>
            
            </div>
            
        </>
    );
}

export default LeftColumn;


    //    <li className="dashboard">
    //                         <a href="#" className="a">
    //                             <span>Dashboard</span>
    //                         </a>
    //                     </li>
    //                     <li className="apigateway" >
    //                         <a href="#" className="b">
    //                             API Gateway
    //                         </a>
    //                     </li> 