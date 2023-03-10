import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SelectBox_copy from 'component/selectbox/select_mui copy';
import { nodes } from 'data/initial_data';

import { useDispatch, useSelector } from 'react-redux';
import { DBcreate, DBCreate_mode, DBCreate_cluster_nodes, DBCreate_multi_primary } from 'redux/reducerSlice';

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

export default function DBConfig() {

  const dispatch = useDispatch();
  const data = useSelector(DBcreate);
  const [mysqlType, setMysqlType] = useState(data[0].mysql.mode);
  const [multi_primary, setMulti_primary] = useState(data[0].mysql.multi_primary);
  
  const onChangeRadio = (e: any) => {

    const { value, name } = e.target;

    if(name === 'dbMySqlType1') {
      setMysqlType('standalone');
      dispatch(DBCreate_mode('standalone'));
      dispatch(DBCreate_cluster_nodes(0));
    }
    if(name === 'dbMySqlType2') {
      setMysqlType('cluster');
      dispatch(DBCreate_mode('cluster'));
      dispatch(DBCreate_cluster_nodes(value));
    }  
    if(name === 'dbPrimaryType1') {
      if(value === 'single') {
        setMulti_primary(false);
        dispatch(DBCreate_multi_primary(false));
      }      
    }
    if(name === 'dbPrimaryType2') {
      if(value === 'multi') {
        setMulti_primary(true);
        dispatch(DBCreate_multi_primary(true));
      }      
    } 
  }

  const onRadioClick = (type: any) => {

    if(type === 'dbMySqlType1' ) {
      setMysqlType('standalone');
      dispatch(DBCreate_mode('standalone'));
      dispatch(DBCreate_cluster_nodes(0));
    }
    if(type === 'dbMySqlType2' ) {
      setMysqlType('cluster');
      dispatch(DBCreate_mode('cluster'));
      dispatch(DBCreate_cluster_nodes(3));
    }
    if(type === 'dbPrimaryType1' ) {
      setMulti_primary(false);
      dispatch(DBCreate_multi_primary(false));
    }
    if(type === 'dbPrimaryType2' ) {
      setMulti_primary(true);
      dispatch(DBCreate_multi_primary(true));
    }
  }

    return (
        <React.Fragment>
            <Content>
              <ItemDiv>
                <ItemWrap>
                  <Item>
                    <ItemName>MySQL 구성 방식</ItemName>
                    <ItemInput>
                      <input type='radio' name='dbMySqlType1' value='standalone' checked={mysqlType === 'standalone'? true:false} onChange={onChangeRadio}></input>
                      <ItemText type='click' onClick={() => { onRadioClick('dbMySqlType1'); }}>Stand-Alone</ItemText>
                      <input type='radio' name='dbMySqlType2' value='cluster' checked={mysqlType === 'cluster'? true:false} onChange={onChangeRadio}></input>
                      <ItemText type='click' onClick={() => { onRadioClick('dbMySqlType2'); }}>Cluster</ItemText> 
                    </ItemInput>
                    { mysqlType === 'standalone' &&
                      <ItemNote color='royalblue'>Stand-Alone은 단일 서버 구성으로 고가용성을 지원하지 않습니다. 안정적 서비스 제공을 위해서 고가용성을 지원하는 cluster 방식으로 변경하세요.</ItemNote>
                    }
                    { mysqlType === 'cluster' &&
                      <ItemNote>Cluster 구성은 고가용성을 지원하여 안정적 서비스 제공이 가능합니다.</ItemNote>
                    }
                  </Item>
                  { mysqlType === 'cluster' && 
                  <React.Fragment>
                    <Item>
                      <ItemName>- Cluster 노드수</ItemName>
                      <ItemInput>
                        <SelectBox_copy dropdown={nodes} name='mysql' name2='cluster_nodes'/>
                      </ItemInput>
                    </Item> 
                    <Item>
                      <ItemName>- Primary 구성</ItemName>
                      <ItemInput>
                        <div>
                          <input type='radio' name='dbPrimaryType1' value='single' checked={multi_primary === false? true:false} onChange={onChangeRadio}></input>
                          <ItemText type='click' onClick={() => { onRadioClick('dbPrimaryType1'); }}>Single</ItemText>
                          <input type='radio' name='dbPrimaryType2' value='multi' checked={multi_primary === true? true:false} onChange={onChangeRadio}></input>
                          <ItemText type='click' onClick={() => { onRadioClick('dbPrimaryType2'); }}>Multi</ItemText> 
                        </div>
                      </ItemInput>
                    </Item>  
                  </React.Fragment>
                  }   
                </ItemWrap>   
              </ItemDiv>
            </Content>
        </React.Fragment>
    );
}