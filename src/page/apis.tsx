import React, { useEffect } from 'react';

import Table from '../component/Table_mui';

import apis from '../axios/apis';

import { useDispatch } from "react-redux";
import { getList, getlist } from '../redux/reducerSlice' 

export default function APIs() {

  const dispatch = useDispatch();

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
      <Table />
    </React.Fragment>
  );
}