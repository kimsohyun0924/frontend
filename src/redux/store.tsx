import { configureStore } from '@reduxjs/toolkit';
import reducerSlice from './reducerSlice';

//redux-persist 사용을 위한 준비
import storageSession from 'redux-persist/lib/storage/session'; //sessionStorage
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'; // 비동기 작업을 처리할 때 많이 사용하는 미들웨어


//여러가지 reducerSlice를 합쳐서 하나의 root reducer로 만든 후 configureStore(store생성) 함수 사용시 넣어주는 정보
const reducers = combineReducers({
  apiList: reducerSlice,
});

const persistConfig = {
  key: 'root',
  storage : storageSession, //상태 sessionStorage에 저장
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;