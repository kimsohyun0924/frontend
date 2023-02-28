import React from 'react';
import styled, { css } from 'styled-components';
import SelectBox from 'component/selectbox/select_mui';

export const Content = styled.div`
`;

export const ItemDiv = styled.div`
  display: flex;
  color: #555555;
  padding: 0.5rem 1rem;
`;

export const HR = styled.div`
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

export const ItemCategory = styled.div`
  width: 160px;
  min-width: 80px;
  text-align: center;
  font-weight: 500;
  border-radius: 2px;
  padding: 1rem 0;
  font-size: 16px;
`;

export const ItemWrap = styled.div`
  width: 100wh;
  background: #f5f5f5;
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 14px;
`;

export const Item = styled.div`
  display: flex;
  padding: 0.3rem 0.5rem;
`;

export const ItemName = styled.div`
  width: 180px;
  min-width: 180px;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;  
`;

export const ItemInput = styled.div`
  width: 220px;
  min-width: 220px;
  height: 32px;
  display: flex;
  align-items: center;

  &:before {
    content: ": ";
    padding-right: 0.5rem;
    color: #404040;
  }
`;

export const ItemNote = styled.div`
  font-size: 12px;
  color: #777777;
  padding: 0 10px;
  height: 32px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.state &&
    css`
      color: red;
    `
  }
`;

export const ItemText = styled.span`
  padding-right: 1rem;
  padding-left: 0.3rem;

  ${props => props.type === 'click' &&
    css`
      &:hover {
        cursor: pointer;
      }
    `
    }
  `;

export default function DBInfo() {

    return (
        <React.Fragment>
            <Content>
                <ItemDiv>
                    <HR />
                </ItemDiv>
                <ItemDiv>
                    <ItemCategory>서버 선택</ItemCategory>
                    <ItemWrap>
                        <Item>
                            <ItemName>DB 엔진 버전</ItemName>
                            <ItemInput>
                                <SelectBox/>
                                {/* <DropdownItem height='120' dropdownItems={optionsDBVersion} setItem={setDBVersion} selectedItem={dbVersion} /> */}
                            </ItemInput>
                            {/* <ItemNote state={noteDBVersion}>{messageDBVersion}</ItemNote> */}
                        </Item>
                        <Item>
                            <ItemName>Server Type</ItemName>
                            <ItemInput>
                                {/* <DropdownItem dropdownItems={optionsVMType} setItem={setVMType} selectedItem={vmType} /> */}
                            </ItemInput>
                            {/* <ButtonServerType>
                                    <ButtonSmall name='상세 정보' action={openModalBox}></ButtonSmall>
                            </ButtonServerType>  */}
                            {/* <ItemNote state={noteVMType}>{messageVMTypeBasic}</ItemNote>
                            { isModalBoxOpen && <ModalDBInstanceCreateType isOpen={isModalBoxOpen} closeModal={closeModalBox} content={optionsVMType} onChange={onChangeRadio} setItem={setVMType} vmType={vmType} /> } */}
                        </Item>
                        <Item>
                            <ItemName>이용 요금</ItemName>
                            <ItemInput>
                                <div>
                                    <input type='radio' name='dbUsagePlan1' value='hourly'></input>
                                    <ItemText type='click' >시간 요금제</ItemText> 
                                    <input type='radio' name='dbUsagePlan2' value='monthly'></input>
                                    <ItemText type='click' >월 요금제</ItemText>
                                </div>
                            </ItemInput>
                        </Item>
                    </ItemWrap>
                </ItemDiv>
            </Content>
        </React.Fragment>
    );
}