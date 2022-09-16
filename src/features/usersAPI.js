import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiurl from "../api";

const userAPI = createApi({
  reducerPath: "userAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: apiurl,
  }),
  endpoints: (builder) => ({

    singIn: builder.mutation({
        query: (dataCity) => ({
          url: `/auth/signin`,
          method: "POST",
          body: dataCity,
        }),
      }),
  }),
});

export default userAPI;

export const { useSingInMutation } = userAPI;
