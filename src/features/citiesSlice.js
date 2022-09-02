import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',

    initialState: {
        cities: []
    },

    reducers: {
        fetchFromServer: (state) => {
            state.cities = [
                {
                    "_id": "630fb1cb8faf68486b5cf0b3",
                    "city": "Buenos Aires",
                    "country": "Argentina",
                    "photo": "https://guias-viajar.com/wp-content/uploads/2021/04/Avenida-9-de-julio-Buenos-Aires-en-Argentina.jpg",
                    "population": 17541141,
                    "founded": "1536-01-01T00:00:00.000Z",
                },
                {
                    "_id": "630fb1cb8faf68486b5cf0b4",
                    "city": "New York",
                    "country": "USA",
                    "photo": "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg",
                    "population": 8380000,
                    "founded": "1624-01-01T00:00:00.000Z",
                },
                {
                    "_id": "630fb1cb8faf68486b5cf0b5",
                    "city": "London",
                    "country": "England",
                    "photo": "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-london-england.jpg",
                    "population": 8982000,
                    "founded": "2047-01-01T03:00:00.000Z",
                },
                {
                    "_id": "630fb1cb8faf68486b5cf0b6",
                    "city": "Bangkok",
                    "country": "Thailand",
                    "photo": "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg",
                    "population": 10539000,
                    "founded": "1972-01-01T00:00:00.000Z",
                },
                {
                    "_id": "630fb1cb8faf68486b5cf0b7",
                    "city": "Hong Kong",
                    "country": "China",
                    "photo": "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-hong-kong.jpg",
                    "population": 7482000,
                    "founded": "1841-01-01T00:00:00.000Z",
                },
                {
                    "_id": "630fb1cb8faf68486b5cf0b1",
                    "city": "Paris",
                    "country": "France",
                    "photo": "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-paris-france.jpg",
                    "population": 2161000,
                    "founded": "1792-01-01T00:00:00.000Z",
                },
            ]
        }
    }
})

export const { fetchFromServer} = citiesSlice.actions
export default citiesSlice.reducer