import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMenuState } from 'data/MenuContext';
import MainContainer from 'layouts/MainContainer';

import { BackupcolumnData } from 'data/initial_data';
import Button from 'component/button/Button';
import Modal from 'component/modal/Modal';
import Table from 'component/table/Table_backup';
import apis from 'axioss/apis';

import { useDispatch, useSelector } from 'react-redux';
import { BackupData, clickedData, checkedItem, Checked } from 'redux/reducerSlice';
import ModalRestore from 'component/modal/ModalRestore';

const ButtonDiv = styled.div`
    /* padding-top: 1rem; */
`;

export default function Backup() {

  const dispatch = useDispatch();
  const checked = useSelector(checkedItem);
  const detailInfo = useSelector(clickedData);
  const menuState = useMenuState();
  const [objectStorage, setObjectStorage] = useState(false);
  const [restore, setRestore] = useState(false);

  const makeTwo = (value: any) => {
    return value < 10 ? "0" + value : value;
  }

  let today = new Date();
  let start = new Date(today);

  start.setMonth(today.getMonth() - 3);

  let dueDate = today.getFullYear() + "-" + makeTwo(today.getMonth()+1) + "-" + makeTwo(today.getDate());
  let startDate = start.getFullYear() + "-" + makeTwo(start.getMonth()+1) + "-" + makeTwo(start.getDate());

  const path = `/backup?startDate=${startDate}&dueDate=${dueDate}`;

  const dataFetch = async () => {
    const url = `/dev/v1.0/${menuState.platformId}/paas/${menuState.tenantId}/dbaas`+ path;
    // const url = '/dev/v1.0/d1/paas/29977b985dfb49adbaea215b5f79d36b/dbaas';
    // console.log(menuState.platformId);
    // console.log(menuState.tenantId);
    try {
      apis.getBackup(url, 'gAAAAABkCB14kK86ruHq5KuAoMipLy9UCgEeG1dCvPamr9anaF9e9wz6Q5ZhPAP42sArH-ukh3ns_FzwYogi9SaFu77wd06hHygituB8PHMXB_8o0j9ghpynnD7zhiMM_pj2P9Hl-ddfKBXIzWU95tOZRD9Ls2kTiHYdcZcGqUPY8O1ijNIaYTE')
        .then((res) => {
           dispatch(BackupData(res.data));
        })
    } catch(error) {
      console.log("async error : ", error);
    }
  };

  const onCreate = () => {
    setObjectStorage(true);
  } 

  const onCreate2 = () => {
    setRestore(true);
  } 

  useEffect(() => {
    dataFetch();
    dispatch(Checked(false));
  }, []);

return (
    <React.Fragment>
      <MainContainer>
        <ButtonDiv>
          <Button color='primary' name='Object Storage로 내보내기' size={15} loading='flase' disabled={!checked} onClick={onCreate}/>
          <Button color='outline' name='복원' size={15} loading='flase' disabled={!checked} onClick={onCreate2}/>
        </ButtonDiv>
        <Table columnData={BackupcolumnData}/>
        <div style={{padding: '50px 0px 50px 0px'}}>
         {detailInfo.id}
        </div>
        <Modal open={objectStorage} setObjectStorage={setObjectStorage}></Modal>
        <ModalRestore open={restore} setRestore={setRestore}></ModalRestore>
      </MainContainer>
    </React.Fragment>
  );
}