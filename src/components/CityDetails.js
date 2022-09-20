import '../styles/CityDetails.css'
import { useParams } from 'react-router-dom'
import { useGetItineraryByCUMutation } from "../features/itineraryAPI";
import { useEffect } from "react";
import Itinerary from "../components/Itinerary";
import ButtonBack from './ButtonBack'

export default function CityDetails(props) {
    let id = useParams().id

    const [getAllItinerary, { data: items }] = useGetItineraryByCUMutation();

    useEffect(() => {
        getAllItinerary({ city: id, user: "" });
    }, [id]);

    const city = props.data
    let newDate = new Date(city.founded)
    let year = newDate.getFullYear()

    return (
        <div className="CityDetails-container">
            <div className='CityDetails-banner' style={{ backgroundImage: `url(${city.photo})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className='CityDetails-bannerColor'>
                    <h3 className='Banner-welcome'>Welcome to</h3>
                    <h3 className='Banner-city'>{city.city}</h3>
                </div>
            </div>
            <div className='CityDetails-info'>
                <h2>DETAILS</h2>
                <p className='Info-city'>Country: {city.country}</p>
                <p className='Info-country'>City: {city.city}</p>
                <p className='Info-population'>Population number: {city.population}</p>
                <p className='Info-founded'>Founded: {year}</p>
            </div>

            {items?.map(Itinerary)}
            <ButtonBack linkTo='/cities' buttonText='Back to Cities' />
        </div>
    )
}
