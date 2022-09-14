import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiurl from "../api";

const itineraryAPI = createApi({
  reducerPath: "itineraryAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: apiurl,
  }),

  endpoints: (builder) => ({
    getAllItinerary: builder.query({
      query: () => "/itineraries",
    }),
  
    createItinerary: builder.mutation({
      query: (data) => ({
        url: "/itineraries/",
        method: "POST",
        body: data,
      }),
    }),
    getItineraryByCU: builder.mutation({
        query: ({city,user}) => ({
            url: `/itineraries/?city=${city}&&user=${user}`,
            method: "GET",
            
          }),transformResponse: (e)=>{
            return(e.response) }
    }),

    editItinerary: builder.mutation({
      query: ({ dataItinerary, id }) => ({
        url: `/itineraries/${id}`,
        method: "PATCH",
        body: dataItinerary,
      }),
    }),
  }),
});

export default itineraryAPI;
export const {
  useGetAllItineraryQuery,
  useCreateItineraryMutation,
  useEditItineraryMutation,
  useGetItineraryByCUMutation,
} = itineraryAPI;
