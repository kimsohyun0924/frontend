import React  from 'react';
import styled, { css } from "styled-components";
import { SidebarData } from './SidebarData';
import SideMenu from './SideMenu';

const SidebarWrap = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: 100%;
  width: 280px;
  z-index: 10;
  justify-content: center;
  transition: all 0s ease;
  background: #f4f4f4;
`;

const SidebarContainer = styled.div`
  color: #0D0C1D;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ItemDiv = styled.div`
  height: 40px;
  color: #333336;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const FirstMenuDiv = styled.div`  
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  margin-left: 1rem;
  line-height: 40px;
`;

const Line = styled.div`
  border-bottom: solid 1px #666666;
`

const FirstMenu = styled.div`
  padding-left: 0.5rem;
`;

const SidebarLabel = styled.span`  
  margin-left: 0.5rem; 
`;

const ZoneInfo = styled.div`
  color: #03428e;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  left: 100px;
`;

export default function Sidebar() {

  return ( 
    <React.Fragment>

      <SidebarWrap>
        <SidebarContainer> 
          <ItemDiv>
            <FirstMenuDiv>
              <FirstMenu>
                <SidebarLabel>Platform</SidebarLabel>
              </FirstMenu>
              <ZoneInfo>@</ZoneInfo>
            </FirstMenuDiv> 
          </ItemDiv>
          <Line />
          <ItemDiv>
            <FirstMenuDiv>
              <FirstMenu>
                <SidebarLabel>All Services</SidebarLabel>
              </FirstMenu>
            </FirstMenuDiv> 
          </ItemDiv>
          <Line />
          <SideMenu menuData={SidebarData}/>
        </SidebarContainer>
      </SidebarWrap>

    </React.Fragment>
  );
}