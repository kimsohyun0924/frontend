import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMenuState } from 'data/MenuContext';
import MainContainer from 'layouts/MainContainer';

import { DBInstancecolumnData } from 'data/initial_data';
import Button from 'component/button/Button';
import Table from 'component/table/Table_example';
import apis from 'axioss/apis';

import { useDispatch, useSelector } from 'react-redux';
import { getList, clickedData, checkedItem } from 'redux/reducerSlice';

const ButtonDiv = styled.div`
    /* padding-top: 1rem; */
`;

export default function ParameterGroup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const test = useSelector(checkedItem);
  const detailInfo = useSelector(clickedData);
  const menuState = useMenuState();
  const [click, setClick] = useState(true);

  const dataFetch = async () => {
    const url = `/dev/v1.0/${menuState.platformId}/paas/${menuState.tenantId}/dbaas/parameter-groups?database=mysql`;
    // const url = '/dev/v1.0/d1/paas/29977b985dfb49adbaea215b5f79d36b/dbaas';
    // console.log(menuState.platformId);
    // console.log(menuState.tenantId);
    try {
      apis.getParameterGroupData(url, 'gAAAAABkCB14kK86ruHq5KuAoMipLy9UCgEeG1dCvPamr9anaF9e9wz6Q5ZhPAP42sArH-ukh3ns_FzwYogi9SaFu77wd06hHygituB8PHMXB_8o0j9ghpynnD7zhiMM_pj2P9Hl-ddfKBXIzWU95tOZRD9Ls2kTiHYdcZcGqUPY8O1ijNIaYTE')
        .then((res) => {
            console.log(res.data);
        //   dispatch(getList(res.data));
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
        <Table columnData={DBInstancecolumnData}/>
        <div style={{padding: '50px 0px 50px 0px'}}>
         {detailInfo.id}
        </div>
      </MainContainer>
    </React.Fragment>
  );
}