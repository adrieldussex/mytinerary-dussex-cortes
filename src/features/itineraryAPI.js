import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiurl from "../api";

const itineraryAPI = createApi({
  reducerPath: "itineraryAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: apiurl,
  }),

  endpoints: (builder) => ({
    getAllItinerary: builder.query({
      query: () => "/itinerary",
    }),
  
    createItinerary: builder.mutation({
      query: (data) => ({
        url: "/itinerary/",
        method: "POST",
        body: data,
      }),
    }),
    getItinerary: builder.query({
      query: (id) => `/itinerary/${id}`,
    }),

    editItinerary: builder.mutation({
      query: ({ dataItinerary, id }) => ({
        url: `/itinerary/${id}`,
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
  useGetItineraryQuery,
} = itineraryAPI;
