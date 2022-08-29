import React from 'react';
import styled, { css } from 'styled-components';

const FirstDiv = styled.div`
    width: 200px;
    height: 200px;
    background: pink;
`;


export default function FirstPage() {

  return (
    <React.Fragment>
        <FirstDiv/>
    </React.Fragment> 
  );
}