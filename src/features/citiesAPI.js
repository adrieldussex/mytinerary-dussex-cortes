import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const citiesAPI = createApi({
    reducerPath : "citiesAPI",

    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:4000/'
    }),

    endpoints: (builder) => ({
        getAllCities : builder.query({
            query: () => '/cities'
        }),
        searchCities : builder.query({
            query: (search) => `/cities/?city=${search}`
        })
    })
})

export default citiesAPI
export const {useGetAllCitiesQuery, useSearchCitiesQuery} = citiesAPI