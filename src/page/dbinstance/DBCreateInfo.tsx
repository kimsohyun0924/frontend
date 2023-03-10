import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SelectBox from 'component/selectbox/select_mui';
import SelectBox_copy from 'component/selectbox/select_mui copy';
import { DBVersion, serverType } from 'data/initial_data';

import { useDispatch, useSelector } from 'react-redux';
import { DBcreate, DBCreate_usage_plan } from 'redux/reducerSlice';

interface styledProps {
  state? : boolean;
  type? : string;
}

const Content = styled.div`
`;

const ItemDiv = styled.div`
  display: flex;
  color: #555555;
  padding: 0.5rem 1rem;
`;

const ItemWrap = styled.div`
  width: 100wh;
  background: #f5f5f5;
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 14px;
`;

const Item = styled.div`
  display: flex;
  padding: 0.3rem 0.5rem;
`;

const ItemName = styled.div`
  width: 180px;
  min-width: 180px;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;  
`;

const ItemInput = styled.div`
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

const ItemNote = styled.div<styledProps>`
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

const ItemText = styled.span<styledProps>`
  padding-right: 1rem;
  padding-left: 0.3rem;

  ${props => props.type === 'click' &&
    css`
      &:hover {
        cursor: pointer;
      }
    `
  }

  ${props => props.color && 
    css`
      color: ${props.color};
    `
  }
`;

export default function DBInfo() {

  const dispatch = useDispatch();
  const data = useSelector(DBcreate);
  const [usagePlan, setUsagePlan] = useState(data[0].usage_plan);

  const onRadioClick = (type: any) => {
    if(type === 'dbUsagePlan1' ) {
      setUsagePlan('hourly');
      dispatch(DBCreate_usage_plan('hourly'));
    }
    if(type === 'dbUsagePlan2' ) {
      setUsagePlan('monthly');
      dispatch(DBCreate_usage_plan('monthly'));
    }
  }

  const onChangeRadio = (e: any) => {
    const { value, name } = e.target;

    if(name === 'dbUsagePlan1') {
      setUsagePlan('hourly');
      dispatch(DBCreate_usage_plan(value));
    }
    if(name === 'dbUsagePlan2') {
      setUsagePlan('monthly');
      dispatch(DBCreate_usage_plan(value));
    }
  }

    return (
        <React.Fragment>
            <Content>
                <ItemDiv>
                    <ItemWrap>
                        <Item>
                            <ItemName>DB 엔진 버전</ItemName>
                            <ItemInput>
                                <SelectBox dropdown={DBVersion} name='version'/>
                            </ItemInput>
                            {/* <ItemNote state={noteDBVersion}>{messageDBVersion}</ItemNote> */}
                        </Item>
                        <Item>
                            <ItemName>Server Type</ItemName>
                            <ItemInput>
                              <SelectBox_copy dropdown={serverType} name='cloud_resource' name2='vm_flavor'/>
                            </ItemInput>
                        </Item>
                        <Item>
                            <ItemName>이용 요금</ItemName>
                            <ItemInput>
                            <div>
                              <input type='radio' name='dbUsagePlan1' value='hourly' checked={usagePlan === 'hourly'? true:false} onChange={onChangeRadio}></input>
                              <ItemText type='click' onClick={() => { onRadioClick('dbUsagePlan1'); }}>시간 요금제</ItemText> 
                              <input type='radio' name='dbUsagePlan2' value='monthly'  checked={usagePlan === 'monthly'? true:false} onChange={onChangeRadio}></input>
                              <ItemText type='click' onClick={() => { onRadioClick('dbUsagePlan2'); }}>월 요금제</ItemText>
                            </div>
                            </ItemInput>
                        </Item>
                    </ItemWrap>
                </ItemDiv>
            </Content>
        </React.Fragment>
    );
}