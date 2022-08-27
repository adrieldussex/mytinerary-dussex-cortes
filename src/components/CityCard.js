import '../styles/CityCard.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function CityCard(props) {
    const country = props.country
    const city = props.city
    const image = props.url 

    return (
        <div className='CityCard-container'>
            <img src={image} alt=''/>
            <div className='CityCard-info'>
                <p>{city}</p>
                <p>{country}</p>
            </div>
            <div className='CityCard-details'>
                <LinkRouter to='/*'>See more</LinkRouter>
            </div>
        </div>
    )
}
