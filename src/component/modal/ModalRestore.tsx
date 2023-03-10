import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router';
import { useMenuState } from '../../data/MenuContext';
import Button from 'component/button/Button';
import SelectBox from 'component/selectbox/select_mui';
import Table from 'component/table/Table_backup';
import { BackupcolumnData } from 'data/initial_data';

interface test {
    isOpen? : string,
    width? : string,
    height? : string,
    paddingTop? : string,
    paddingLeft? : string,
    state? : string,
    size? : string,
    margin? : string,
    padding? : string,
    type? : string,
    hover? : string,
    zindex? : string
}

export const HRDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalWrapper = styled.div<test>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const ModalOverlay = styled.div<test>`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #333;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 1rem;
  z-index: 100;
  animation: modal-show 0.5s;
  overflow: visible;
  line-height: 24px;
  width: 450px;
  height: 350px;

  ${props => props.width && 
    css`
      width: ${props.width}px;
    `
  }

  ${props => props.height && 
    css`
      height: ${props.height}px;
    `
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: 0px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const HeaderDiv= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.div`
  padding: 1rem;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

export const HeaderCancel = styled.div`
  padding: 1rem;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  &:hover {
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 1rem;
  display: flex;
  padding: 1rem;
  font-weight: 700;
`;

export const TextDiv = styled.div<test>`
  padding : 1rem;
  font-size: 16px;
  color: #333333;

  ${props => props.paddingTop === '0' && 
  css`
    padding: 0 1rem;
  `
}
`;

export const InputForm = styled.input`
  width: 200px;
  border: solid 1px #dadada;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
  height: 32px;
  padding: 0 10px;
  font-size: 16px;
  color: #333333;

  ${props => props.type === 'readonly' && 
    css`
      background: #f0f0f0;
    `
  }

  ${props => props.type === 'port' && 
    css`
      width: 90px;
    `  
  }

  ${props => props.width && 
    css`
      width: ${props.width}px;
    `  
  }
`

export const ItemWrap = styled.div`
  width: 100wh;
  background: #f5f5f5;
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 14px;
`;

export const ItemDiv = styled.div`
  padding: 0.5rem 1rem;
  font-size: 14px;
`;

export const Item = styled.div`
  display: flex;
  padding: 0.3rem 0.5rem;
`;

export const ItemNote = styled.div<test>`
  font-size: 12px;
  color: #777777;
  height: 32px;
  text-align: left;
  display : flex;
  align-items : center;
  padding-left: 10px;

  ${props => props.state &&
    css`
      color: red;
    `
  }

  ${props => props.paddingLeft &&
    css`
      padding-left: ${props.paddingLeft}rem;
    `
  }

`;

export const TextBlue = styled.span`
  color: royalblue;
  font-weight: 500;
  font-size: 18px;
`;

export  const ItemInput = styled.div<test>`
  height: 32px;
  display: flex;
  align-items: center;

  ${props => ! (props.type === 'date') &&
  css`
    &:before {
      content: ": ";
      padding-right: 0.5rem;
      color: #404040;
    }
  `
}

`;

export  const ItemTitle = styled.div<test>`
  width: 150px;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;  
  ${props => props.color &&
    css`
      color: ${props.color};
    `
  }

  ${props => props.width &&
    css`
      width: ${props.width}px;
    `
  }
`;

export const TextInfo = styled.span<test>`
  color: red;
  font-size: 16px;

  ${props => props.color &&
    css`
      color: ${props.color};
    `
  }

  ${props => props.size &&
    css`
      font-size: ${props.size}px;
    `
  }

  ${props => props.margin &&
    css`
      margin: ${props.margin};
    `
  }

  ${props => props.padding &&
    css`
      margin: ${props.padding};
    `
  }

  ${props => props.hover === 'pointer' &&
    css`  
      &:hover {
        color: royalblue;
        cursor: pointer;
      };  
    `
  }
`;

export const ItemInputDropdown = styled.div<test>`
  width: 220px;
  min-width: 220px;
  height: 32px;
  display: flex;
  align-items: center;
  z-index: 101;

  ${props => props.zindex &&
    css`
      z-index: ${props.zindex};
    `
  }

  ${props => ! (props.type === 'date') &&
    css`
      &:before {
        content: ": ";
        padding-right: 0.5rem;
        color: #404040;
      }
    `
  }

  ${props => props.type === 'date' &&
    css`
      padding-left: 0.5rem;
    `
  }

  ${props => props.width &&
    css`
      width: ${props.width}px;
    `
  }
`;

export const ItemText = styled.span`
  padding-right: 1rem;
  padding-left: 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const TableDiv = styled.div<test>`
  overflow: auto;

  ${props => props.height && 
    css`
      height: ${props.height}px;
    `
  }
`;

export const Cancel = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: #555555;
`;

export const HR = styled.div<test>`
  border-bottom: 1px solid #cccccc;
  width: 100%;

  ${props => props.width &&
    css`
      width: ${props.width};
    `
  }

  ${props => props.color &&
    css`
      border-bottom: 1px solid ${props.color};
    `
  }
`;

export default function ModalRestore({ open, setRestore } : any) {
  if (!open) return null;

  const onCancel = () => {
    setRestore(false);
  };

  return (
    <ModalWrapper isOpen={open}>
        <ModalOverlay width='700' height='650'>
            <HeaderDiv>
                <Header>
                    DB Instance 복원
                </Header>  
                <HeaderCancel onClick={onCancel}>
                    <Cancel> &#10005; </Cancel>
                </HeaderCancel>
            </HeaderDiv> 
            <HRDiv>
                <HR width='95%' color='#dee2e6' />
            </HRDiv> 
            <ItemDiv>
                <TextDiv>DB Instance를 복원합니다.</TextDiv> 
            </ItemDiv>
            <Table columnData={BackupcolumnData}/>
        </ModalOverlay>
    </ModalWrapper>
  );
}
