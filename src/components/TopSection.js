import React from 'react';


// import styled from 'styled-components';

// const topsection = styled.div`
//     background-color: black;
// `;

function TopSection() {
    return (
        <>
            <div className="topsection">
                <div className="logoNav">
                    <span>
                        <img src="/GNB_Logo.svg" alt="KT Cloud"/>
                    </span>
                </div>
            </div>
        </>
    );
}

export default TopSection;