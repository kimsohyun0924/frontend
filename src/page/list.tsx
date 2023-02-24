import React, { useEffect } from 'react';
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

  const dataFetch = async () => {
    const url = `/dev/v1.0/${menuState.platformId}/paas/${menuState.tenantId}/dbaas`;
    // const url = '/dev/v1.0/d1/paas/29977b985dfb49adbaea215b5f79d36b/dbaas';
    // console.log(menuState.platformId);
    // console.log(menuState.tenantId);
    try {
      apis.getDbaaSData(url, 'gAAAAABj-GZ3N8kn31yq-xKlNAH7kFWM9xfLOoR385EVNQA9bIm8dnvunNu2XWCOeDvPs5ghjrW13byUnZYaiKQIoDQ0bsKq5XdqnRp-eN3_gFOoGMz4TJ1PXzHAwDfZ5qtwDxE7lS2xus1s8BbRYD-ncH12jl2CUXGgRrwZBVwJBoSyBOwCNT8')
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
          <Button type='primary' name='DB Instance 생성' loading='flase' size='medium' disabled={false} action={onCreate}/>
        </ButtonDiv>
        <Table />
      </MainContainer>
    </React.Fragment>
  );
}