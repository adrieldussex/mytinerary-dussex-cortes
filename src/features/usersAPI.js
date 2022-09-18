import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiurl from "../api";

const userAPI = createApi({
  reducerPath: "userAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: apiurl,
  }),
  endpoints: (builder) => ({

    getOneUser: builder.mutation({
      query: (userID) => ({
          url: `/auth/?user=${userID}`,
          method: "GET",          
        }), 
        // transformResponse: (e)=> e.response
  }),

    singUp: builder.mutation({
      query: (dataCity) => ({
        url: `/auth/signup`,
        method: "POST",
        body: dataCity,
      }),
    }),
    singIn: builder.mutation({
        query: (dataCity) => ({
          url: `/auth/signin`,
          method: "POST",
          body: dataCity,
        }),
      }),
    singOut: builder.mutation({
        query: (dataCity) => ({
          url: `/auth/signout`,
          method: "POST",
          body: dataCity,
        }),
      }),
  }),
});

export default userAPI;

export const {useSingInMutation , useSingOutMutation , useSingUpMutation, useGetOneUserMutation } = userAPI;
