import '../styles/CityCard.css'


export default function CityCard(props) {
      const country = props.country
      const city = props.city
      const url = props.url

    return (
        <div className='CityCard-container'>
            <img src={url} alt=''/>
            <div className='CityCard-info'>
                <p>{city}</p>
                <p>{country}</p>
            </div>
            <div className='CityCard-details'>
                <a href="#">See more</a>
            </div>
        </div>
    )
}
