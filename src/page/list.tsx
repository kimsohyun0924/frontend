import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMenuState } from 'data/MenuContext';
import MainContainer from 'layouts/MainContainer';

import Button from 'component/button/Button';
import Table from 'component/table/Table_example';
import apis from 'axioss/apis';

import { useDispatch } from 'react-redux';
import { getList, getlist } from 'redux/reducerSlice';

const ButtonDiv = styled.div`
    /* padding-top: 1rem; */
`;

export default function APIs() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuState = useMenuState();
  const [click, setClick] = useState(true);

  const dataFetch = async () => {
    const url = `/dev/v1.0/${menuState.platformId}/paas/${menuState.tenantId}/dbaas`;
    // const url = '/dev/v1.0/d1/paas/29977b985dfb49adbaea215b5f79d36b/dbaas';
    // console.log(menuState.platformId);
    // console.log(menuState.tenantId);
    try {
      apis.getDbaaSData(url, 'gAAAAABj_T_ohnguUsJurFkhovrURSDCXNTjxhxsFiVahsZ0o4Mqf7Wn2jkAWfsm_ovTLvYrwaYeGcTEtnzjqm265gX300PVFHZcTkpqLkYZjjqpibz69GxvgOGBd0mroCT5rJqr1xeU5rT5gVvz7XBiPkLt5y7YndAhAPVA1eP72tjsTpnJW-Q')
        .then((res) => {
          dispatch(getList(res.data));
        })
    } catch(error) {
      console.log("async error : ", error);
    }
  };

  const onCreate = () => {
    navigate('/dbinstance-create');
  } 

  useEffect(() => {
    dataFetch();
  }, []);

return (
    <React.Fragment>
      <MainContainer>
        <ButtonDiv>
          <Button color='primary' name='DB Instance 생성' size={15} loading='flase' disabled={false} onClick={onCreate}/>
          <Button color='primary' name='Object Storage에서 복원' size={15} loading='flase' disabled={false} onClick={onCreate}/>
          <Button color='outline' name='시작' size={15} loading='flase' disabled={click} onClick={onCreate}/>
          <Button color='outline' name='정지' size={15} loading='flase' disabled={click} onClick={onCreate}/>
          <Button color='outline' name='재시작' size={15} loading='flase' disabled={click} onClick={onCreate}/>
          <Button color='outline' name='삭제' size={15} loading='flase' disabled={click} onClick={onCreate}/>
        </ButtonDiv>
        <Table />
      </MainContainer>
    </React.Fragment>
  );
}