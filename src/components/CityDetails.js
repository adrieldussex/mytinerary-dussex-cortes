import { useEffect } from 'react'
import '../styles/CityDetails.css'
import ButtonBack from './ButtonBack'
import Itinerary from './Itinerary'
import axios from 'axios'
import apiurl from '../api'

export default function CityDetails(props) {
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
            
            <Itinerary/>
            <ButtonBack linkTo='/cities' buttonText='Back to Cities'/>
    </div>
)
}
