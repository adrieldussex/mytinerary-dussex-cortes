import axios from 'axios'
import { useEffect, useState } from 'react'
import CityCard from '../components/CityCard'
import '../styles/Cities.css'

export default function Cities() {
  // const cities = [
  //   { country: "Argentina", city: "Buenos Aires", url: "https://guias-viajar.com/wp-content/uploads/2021/04/Avenida-9-de-julio-Buenos-Aires-en-Argentina.jpg" },
  //   { country: "Japan", city: "Kyoto", url: "https://blog.goway.com/globetrotting/wp-content/uploads/2018/05/Kiyomizu-dera-Temple-and-cherry-blossom-season-Sakura-spring-time-in-Kyoto-Japan-_1017748333.jpg" },
  //   { country: "France", city: "Paris", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-paris-france.jpg" },
  //   { country: "USA", city: "New York", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg" },
  //   { country: "England", city: "London", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-london-england.jpg" },
  //   { country: "Thailand", city: "Bangkok", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg" },
  //   { country: "China", city: "Hong Kong", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-hong-kong.jpg" },
  //   { country: "Denmark", city: "Copenhagen", url: "https://www.planetware.com/wpimages/2020/03/denmark-in-pictures-beautiful-places-to-photograph-nyhavn-copenhagen.jpg" },
  //   { country: "Italy", city: "Rome", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-rome-italy.jpg" },
  //   { country: "China", city: "Macau", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-macau-china.jpg" },
  //   { country: "Turkey", city: "Istanbul", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-istanbul-turkey.jpg" },
  //   { country: "Malaysia", city: "Kuala Lumpur", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-kuala-lumpur-malaysia.jpg" },
  //   { country: "India", city: "Delhi", url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-delhi-india.jpg" },
  //   { country: "Mexico", city: "Cancun", url: "https://www.planetware.com/wpimages/2019/08/mexico-cancun-top-attractions-cancuns-beautiful-beaches.jpg" }
  // ]
  const [cities, setCities] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/cities')
                .then(res => setCities(res.data))
    }, [])

  return (
    <div className='Cities-container'>
      <h1>Cities</h1>
      <div className='Cities-card-container'>
        {cities.map(CityCard)}
      </div>
    </div>
  )
}
