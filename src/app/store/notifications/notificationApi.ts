
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_JSON_SERVER_API_URL;

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNotification: builder.query<Notification, void>({
      query: () =>  `/notifications`,
    }),
  }),
});

export const { useGetNotificationQuery } = notificationApi;
