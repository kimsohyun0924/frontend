import React from 'react';
import styled, { css } from 'styled-components';

const SecondDiv = styled.div`
    width: 200px;
    height: 200px;
    background: black;
`;


export default function SecondPage() {

  return (
    <React.Fragment>
        <SecondDiv/>
    </React.Fragment> 
  );
}