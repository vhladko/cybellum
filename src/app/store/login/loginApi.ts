import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostLoginQueryArg, PostLoginResult } from './types';

const baseUrl = process.env.REACT_APP_JSON_SERVER_API_URL;

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    postLogin: builder.mutation<PostLoginResult, PostLoginQueryArg>({
      query: ({ username, password }) => ({ url: `/login`, method: 'POST', body: { username, password } }),
    }),
  }),
});

export const { usePostLoginMutation } = loginApi;
