import React, { useEffect } from 'react';

import Table from '../component/Table';

import apis from '../axios/apis';

import MainContainer from '../layouts/MainContainer';

import { useDispatch } from "react-redux";
import { getList, getlist } from '../redux/reducerSlice' 

export default function APIs() {

  const dispatch = useDispatch();


  const dataFetch = async () => {
    const url = '/dev/v1.0/d1/paas/29977b985dfb49adbaea215b5f79d36b/dbaas';
    try {
      const response = await apis.getDbaaSData(url, 'gAAAAABj9XTNQcPSevr0qZp18UUQ0g2PS_IdyqR5U4CUpOFk8koreQ63rTKVt1CTxk-nuxC06C7TioP9p6_Z3yiSifHULTIpHlgnE_BYe_sfvveEvdvF1KNgz5KrsTZooHMaQbwOpvzE8LISgnW_Bag8-17D3Qq_CONQ_fj3wHuJdIvcarRVNic');
      dispatch(getList(response.data));
    } catch(error) {
      console.log("async error : ", error);
    }
  };

  const fetchApis = async () => {
    try {
      apis.getApiList()
        .then((res) => {
          dispatch(getList(res.data));
        });
    } catch (e) {
      console.log("error :"+e);
    }
  };

  useEffect(() => {
    fetchApis();
  }, []);

return (
    <React.Fragment>
      <MainContainer>
        <Table />
      </MainContainer>
    </React.Fragment>
  );
}