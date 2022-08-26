import '../styles/CityCard.css'

export default function CityCard() {
  return (
        <div className='CityCard-container'>
            <img src='https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-hong-kong.jpg' alt=''/>
            <div className='CityCard-info'>
                <p>City</p>
                <p>Country</p>
            </div>
            <div className='CityCard-details'>
                <a href="#">See more</a>
            </div>
        </div>
  )
}
