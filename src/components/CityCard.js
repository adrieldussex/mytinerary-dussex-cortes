import '../styles/CityCard.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function CityCard(props) {
    const country = props.country
    const city = props.city
    const photo = props.photo

    return (
        <div className='CityCard-container' key={city}>
            <img src={photo} alt={city}/>
            <div className='CityCard-info'>
                <p>{city}</p>
                <p>{country}</p>
            </div>
            <div className='CityCard-details'>
                <LinkRouter to='/details'>See more</LinkRouter>
            </div>
        </div>
    )
}
