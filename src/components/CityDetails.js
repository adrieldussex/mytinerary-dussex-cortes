import '../styles/CityDetails.css'
import ButtonBack from './ButtonBack'
import Itinerary from './Itinerary'

export default function CityDetails() {

return (
    <div className="CityDetails-container">       
            <div className='CityDetails-banner' style={{backgroundImage:"url('https://guias-viajar.com/wp-content/uploads/2021/04/Avenida-9-de-julio-Buenos-Aires-en-Argentina.jpg')", backgroundSize:"cover"}}>
                <div className='CityDetails-bannerColor'>
                    <h3 className='Banner-welcome'>Welcome to</h3>
                    <h3 className='Banner-city'>Buenos Aires</h3>
                </div>
            </div>
            <div className='CityDetails-info'>
                <h3 style={{marginBottom:'2rem'}}>DETAILS</h3>
                <h3 className='Info-city'>Country</h3>
                <h3 className='Info-country'>City</h3>
                <p className='Info-population'>Population number</p>
                <p className='Info-fundation'>Date</p>
            </div>
            
            <Itinerary/>
            <ButtonBack linkTo='/cities' buttonText='Back to Cities'/>
    </div>
)
}
