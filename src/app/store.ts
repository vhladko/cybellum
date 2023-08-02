import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { loginApi } from './store/login/loginApi';
import { notificationApi } from './store/notifications/notificationApi';
// ...

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loginApi.middleware, notificationApi.middleware]),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
