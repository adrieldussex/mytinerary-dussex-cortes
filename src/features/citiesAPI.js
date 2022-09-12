import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

const citiesAPI = createApi({
    reducerPath : "citiesAPI",

    baseQuery : fetchBaseQuery({
        baseUrl : apiurl
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