import '../styles/CityDetails.css'
import ButtonBack from './ButtonBack'
// import Itinerary from './Itinerary'
import axios from 'axios'
import apiurl from '../api'
import { useGetItineraryByCUMutation } from "../features/itineraryAPI";
import { useEffect, useState } from "react";
import Itinerary from "../components/Itinerary";


export default function CityDetails(props) {
    
    const [id, setId] = useState("630fb1cb8faf68486b5cf0b4");
  
    const [getAllItinerary, { data: items}] = useGetItineraryByCUMutation();
     
    useEffect(() => {
      getAllItinerary({ city: id, user: "" });
    }, []  );
    
    console.log(items)
  


    const city = props.data
    let newDate = new Date(city.founded)
    let year = newDate.getFullYear()

    useEffect(() => {
        if (city) {
            axios.get(`${apiurl}/cities/?city=${city._id}`)
            .catch(err=>{
                console.log(err)
            })
        }
    },[city])

return (
    <div className="CityDetails-container">       
            <div className='CityDetails-banner' style={{backgroundImage:`url(${city.photo})`, backgroundSize:"cover", backgroundPosition:"center"}}>
                <div className='CityDetails-bannerColor'>
                    <h3 className='Banner-welcome'>Welcome to</h3>
                    <h3 className='Banner-city'>{city.city}</h3>
                </div>
            </div>
            <div className='CityDetails-info'>
                <h3 style={{marginBottom:'2rem'}}>DETAILS</h3>
                <h3 className='Info-city'>Country: {city.country}</h3>
                <h3 className='Info-country'>City: {city.city}</h3>
                <p className='Info-population'>Population number: {city.population}</p>
                <p className='Info-founded'>Founded: {year}</p>
            </div>
            
            {items?.map(Itinerary)}
            <ButtonBack linkTo='/cities' buttonText='Back to Cities'/>
    </div>
)
}
