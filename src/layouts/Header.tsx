import React from 'react';
import styled from "styled-components";

const MainHeader = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 20;
  background: #141e49;
  // border-bottom: 0px solid #dee2e6;
  transition: all 0.3s ease;
  padding: 0 1rem 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: #efefef;
  padding-left: 20px;
`;

const HeaderRight = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: #efefef;
  margin-right: 1rem;
`;

const ULIcon = styled.ul`
  font-size: 1rem;
  margin-left: 1rem;
  padding-top: 0.5rem;
`;

export default function HeaderHeader() {

  return (
    <React.Fragment>

      <MainHeader>
        <HeaderLeft/>
        <HeaderRight>
          <ULIcon/>
        </HeaderRight>
      </MainHeader>
    </React.Fragment>   
  )
}