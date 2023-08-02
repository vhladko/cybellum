import { combineReducers } from "@reduxjs/toolkit";
import { loginApi } from "./store/login/loginApi";
import { notificationApi } from "./store/notifications/notificationApi";

const rootReducer = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
});

export default rootReducer;
