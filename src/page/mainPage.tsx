import React, { useEffect } from 'react';

import Table from '../component/Table';

import apis from '../axios/apis';

import { useDispatch, useSelector } from "react-redux";
import { getList, getlist } from '../redux/reducerSlice' 


export default function mainPage() {

  const dispatch = useDispatch();
  const count = useSelector(getlist);

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

  console.log(count);

  useEffect(() => {
    fetchApis();
  }, []);
  
  return (
      <React.Fragment>
    

      </React.Fragment>
    );
  }