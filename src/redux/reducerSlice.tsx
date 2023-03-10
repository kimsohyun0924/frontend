import { createSlice } from "@reduxjs/toolkit";
import { DBCreateData } from 'data/initial_data';

const initialState = {
  apiList : [],
  clickedData: [],
  checked: false,
  dbCreate: DBCreateData,
  backupData : [],
};

export const reducerSlice = createSlice({
  name: "hey~",
  initialState,
  reducers: {
    getList : (state: any, action) => {
      state.apiList = action.payload;
    },
    ClickedData : (state: any, action) => {
      state.clickedData = action.payload;
    },
    Checked : (state: any, action) => {
      state.checked = action.payload;
    },
    DBCreate : (state: any, action) => {
      state.dbCreate = action.payload;
    },
    DBCreate_version : (state: any, action) => {
      state.dbCreate[0].version = action.payload;
    },
    DBCreate_vm_flavor : (state: any, action) => {
      state.dbCreate[0].cloud_resource.vm_flavor = action.payload;
    },
    DBCreate_usage_plan : (state: any, action) => {
      state.dbCreate[0].usage_plan = action.payload;
    },
    DBCreate_mode : (state: any, action) => {
      state.dbCreate[0].mysql.mode = action.payload;
    },
    DBCreate_cluster_nodes : (state: any, action) => {
      state.dbCreate[0].mysql.cluster_nodes = action.payload;
    },
    DBCreate_multi_primary : (state: any, action) => {
      state.dbCreate[0].mysql.multi_primary = action.payload;
    },
    BackupData : (state: any, action) => {
      state.backupData = action.payload;
    },
  }
});

export const { getList, ClickedData, Checked, DBCreate, DBCreate_version, DBCreate_vm_flavor, DBCreate_usage_plan, DBCreate_mode, DBCreate_cluster_nodes, DBCreate_multi_primary, BackupData } = reducerSlice.actions;
export const getlist = (state: any) => state.apiList.apiList;
export const clickedData = (state: any) => state.apiList.clickedData;
export const checkedItem = (state: any) => state.apiList.checked;
export const DBcreate = (state: any) => state.apiList.dbCreate;
export const Backupdata = (state: any) => state.apiList.backupData;

export default reducerSlice.reducer;