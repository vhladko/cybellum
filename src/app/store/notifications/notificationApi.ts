import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Notification } from './types';

const baseUrl = process.env.REACT_APP_JSON_SERVER_API_URL;

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getNotification: builder.query<Notification, void>({
      query: () => `/notifications/1`,
    }),
  }),
});

export const { useGetNotificationQuery } = notificationApi;
