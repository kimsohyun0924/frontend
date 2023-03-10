import React, { useEffect, useState } from 'react';
import MainContainer from 'layouts/MainContainer';
import styled from 'styled-components';
import Button from 'component/button/Button';
import { useMenuDispatch, useMenuState } from 'data/MenuContext';

const Item = styled.div`
  display: flex;
  padding: 0.3rem 0.5rem;
`;

const ItemName = styled.div`
  width: 150px;
  min-width: 150px;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;  
`;

const ItemInput = styled.div`
  width: 500px;
  min-width: 220px;
  height: 32px;
  display: flex;
  align-items: center;
`;

const InputForm = styled.input`
  width: 300px;
  border: solid 1px #dadada;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
  height: 32px;
  padding: 0 10px;
  font-size: 16px;
  color: #333333;
`
const ItemMessage = styled.div`
  padding: 1rem;
  display: flex;
  color: royalblue;
`;

const ItemText = styled.span`
  padding-right: 1rem;
  padding-left: 0.3rem;
  &:hover {
    cursor: pointer;
  }
`;

const ItemInfo = styled.div`
  line-height: 32px;
  color: #555555;
`;

const TextOrange = styled.span`
  color: darkorange;
  font-size: 18px;
`;

const TextMessage = styled.div`
  color: #555555;
  font-size: 16px;
  padding: 1rem;
`;

export default function TokenPage() {

  const menuDispatch = useMenuDispatch();
  const menuState = useMenuState();

  const [token, setToken] = useState(null);
  const [message, setMessage] = useState(`${menuState.token}`);
  const [developMode, setDevelopMode] = useState(menuState.developMode);
  const [loginId, setLoginId] = useState(menuState.loginId);

  const onChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;

    if(name === 'token') {
      setToken(value);
      setMessage("");
    }

  }

  const onChangeRadio = (e: any) => {

    const { name } = e.target;

    if(name === 'ktclouddev@gmail.com') {
      setLoginId('ktclouddev@gmail.com');

    } else if(name === 'd_edu_35@kt.com') {
      setLoginId('d_edu_35@kt.com')

    } else if(name === 'gclopstdev@gmail.com') {
      setLoginId('gclopstdev@gmail.com')

    } else if(name === 'imdb.deving2@gmail.com') {
      setLoginId('imdb.deving2@gmail.com')

    } else if(name === 'localMode') {
      setDevelopMode('local');

    } else if(name === 'devMode') {
      setDevelopMode('dev');
    }
  }

  const changePlatformType = (type: string) => {
    if(type === 'ktclouddev@gmail.com') {
      setLoginId('ktclouddev@gmail.com');

    } else if(type === 'd_edu_35@kt.com') {
      setLoginId('d_edu_35@kt.com');

    } else if(type === 'gclopstdev@gmail.com') {
      setLoginId('gclopstdev@gmail.com');  

    } else if(type === 'imdb.deving2@gmail.com') {
      setLoginId('imdb.deving2@gmail.com');
    }
  }

  const changeDevelopMode = (mode: string) => {
    if(mode === 'local') {
      setDevelopMode('local');
    } else if(mode === 'dev') {
      setDevelopMode('dev');
    }
  }

  const saveToken = () => {

    menuDispatch({
      type:'UPDATE',
      data: {
        ...menuState, 
        token : token
      }
    });

    setMessage(`${token}`);
  }

  useEffect(() => {

    selectPlatformId();    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginId]);

  const selectPlatformId = () => {

    if(loginId === 'ktclouddev@gmail.com') {
      menuDispatch({
        type:'UPDATE',
        data: {
          ...menuState, 
          platformId: 'd1',
          zoneId: 'DX-M1',

          // ktclouddev@gmail.com
          tenantId: '29977b985dfb49adbaea215b5f79d36b',
          accessKey: 'fd3d3adbdcc642d6aa2174e976e5d5c7',
          secretKey: 'f24e7f823d504d5d9877b89eca37d1f6',
          loginId: 'ktclouddev@gmail.com'
        }
      });

    } else if(loginId === 'd_edu_35@kt.com') {
      menuDispatch({
        type:'UPDATE',
        data: {
          ...menuState, 
          platformId: 'd1',
          zoneId: 'DX-M1',

          // d_edu_35@kt.com 계정
          tenantId: '55811c9a5588491fa5f0b2e8c291ef65', 
          accessKey: 'e2e805f21fbd4a0eac216592f0576935',
          secretKey: '1aec4ed166f9469887ddb30197b74c41',
          loginId: 'd_edu_35@kt.com'
        }
      });

    } else if(loginId === 'gclopstdev@gmail.com') {
      menuDispatch({
        type:'UPDATE',
        data: {
          ...menuState, 
          platformId: 'gd1',
          zoneId: 'DX-G',
          tenantId: 'e0428b932fdd4bb4a922351e53f3fecb',
          accessKey: 'd92a927fba6f40fe83e468fc9aaa280e',
          secretKey: '04227a63e8da4827bd29917cd18f98e2',
          loginId: 'gclopstdev@gmail.com'
        }
      });

    } else if(loginId === 'imdb.deving2@gmail.com') {
      menuDispatch({
        type:'UPDATE',
        data: {
          ...menuState, 
          platformId: 'gd1',
          zoneId: 'DX-G',
          tenantId: '07c9061439bb494697837aab5b9ebc11',
          accessKey: '9f4c6abb744a4dc097947d9aefec005e',
          secretKey: 'a49068cbb03f4ca48581d28f239028ca',
          loginId: 'imdb.deving2@gmail.com'
        }
      });

    }
  }

  useEffect(() => {
    if(developMode === 'local') {
      menuDispatch({
        type:'UPDATE',
        data: {
          ...menuState, 
          developMode: 'local'
        }
      });

    } else if(developMode === 'dev') {
      menuDispatch({
        type:'UPDATE',
        data: {
          ...menuState, 
          developMode: 'dev'
        }
      });

    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [developMode]);

  useEffect(() => { 
    selectPlatformId(); 
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <TextMessage>1. Back-End 선택</TextMessage>
      <Item>
        <ItemName>Back-End</ItemName>
        <ItemInput>
          <div>
            <input type='radio' name='localMode' value='local' checked={developMode === 'local'? true:false} onChange={onChangeRadio}></input>
            <ItemText onClick={() => changeDevelopMode('local')}>localhost:8080</ItemText>
            <input type='radio' name='devMode' value='dev' checked={developMode === 'dev'? true:false} onChange={onChangeRadio}></input>
            <ItemText onClick={() => changeDevelopMode('dev')}>dev server</ItemText> 
          </div>
        </ItemInput>
      </Item>
      
      <br></br>
      <TextMessage>2. 접속 계정 선택</TextMessage>
      <Item>
        <ItemName>P Cloud - D1</ItemName>
        <ItemInput>
          <div>
            <input type='radio' name='ktclouddev@gmail.com' value='ktclouddev@gmail.com' checked={loginId === 'ktclouddev@gmail.com'? true:false} onChange={onChangeRadio}></input>
            <ItemText onClick={() => changePlatformType('ktclouddev@gmail.com')}>ktclouddev@gmail.com</ItemText>
            <input type='radio' name='d_edu_35@kt.com' value='d_edu_35@kt.com' checked={loginId === 'd_edu_35@kt.com'? true:false} onChange={onChangeRadio}></input>
            <ItemText onClick={() => changePlatformType('d_edu_35@kt.com')}>d_edu_35@kt.com</ItemText>
          </div>
        </ItemInput>
      </Item>
      <Item>
        <ItemName>G Cloud - GD1</ItemName>
        <ItemInput>
          <div>
            <input type='radio' name='imdb.deving2@gmail.com' value='imdb.deving2@gmail.com' checked={loginId === 'imdb.deving2@gmail.com' ? true:false} onChange={onChangeRadio}></input>
            <ItemText onClick={() => changePlatformType('imdb.deving2@gmail.com')}>imdb.deving2@gmail.com</ItemText> 
            <input type='radio' name='gclopstdev@gmail.com' value='gclopstdev@gmail.com' checked={loginId === 'gclopstdev@gmail.com'? true:false} onChange={onChangeRadio}></input>
            <ItemText onClick={() => changePlatformType('gclopstdev@gmail.com')}>gclopstdev@gmail.com </ItemText> 
          </div>
        </ItemInput>
      </Item>
      <br></br>
      <Item>
        <ItemName></ItemName>
        <ItemInfo>
          login id : <TextOrange>{menuState.loginId}</TextOrange>           
        </ItemInfo>
      </Item>
      <Item>
        <ItemName></ItemName>
        <ItemInfo>
          platform id : <TextOrange>{menuState.platformId}</TextOrange>           
        </ItemInfo>
      </Item>
      <Item>
        <ItemName></ItemName>
        <ItemInfo>
          zone id : <TextOrange>{menuState.zoneId} </TextOrange>           
        </ItemInfo>
      </Item>
      <Item>
        <ItemName></ItemName>
        <ItemInfo>
          tenant id : <TextOrange>{menuState.tenantId}</TextOrange>           
        </ItemInfo>
      </Item>
      {/* <Item>
        <ItemName></ItemName>
        <ItemInfo>
          teir id : <TextOrange>{menuState.tierId}</TextOrange>       
        </ItemInfo>
      </Item> */}
      <Item>
        <ItemName></ItemName>
        <ItemInfo>
          secret key : <TextOrange>{menuState.secretKey}</TextOrange>       
        </ItemInfo>
      </Item>
      <Item>
        <ItemName></ItemName>
        <ItemInfo>
          access key : <TextOrange>{menuState.accessKey}</TextOrange>       
        </ItemInfo>
      </Item>

      <br></br>
      <TextMessage>3. Token 입력</TextMessage>
      <Item>
        <ItemName>Token</ItemName>
        <ItemInput>
          <InputForm name='token' onChange={onChange} />
        </ItemInput>
        <Button name='확인' color='primary' onClick={saveToken}></Button>
      </Item>
      <TextMessage>(주의) 토큰 정보는 선택하신 접속 계정으로 발급된 값을 입력해 주셔야 합니다.</TextMessage>
      <ItemMessage>
        {message}
      </ItemMessage>

    </MainContainer>
  );
}