import '../styles/CitiesCarousel.css'
import Carousel from './Carousel'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function CitiesCarousel() {
    // const items = [
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-paris-france.jpg", title: "Paris, France"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg", title: "New York City, USA"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-london-england.jpg", title: "London, England"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg", title: "Bangkok, Thailand"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-hong-kong.jpg", title: "Hong Kong, China"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/denmark-in-pictures-beautiful-places-to-photograph-nyhavn-copenhagen.jpg", title: "Copenhagen, Denmark"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-singapore.jpg", title: "Singapore"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-rome-italy.jpg", title: "Rome, Italy"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-macau-china.jpg", title: "Macau, China"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-istanbul-turkey.jpg", title: "Istanbul, Turkey"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-kuala-lumpur-malaysia.jpg", title: "Kuala Lumpur, Malaysia"},
    //     {url: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-delhi-india.jpg", title: "Delhi, India"}
    // ]
    const [items, setCities] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/cities')
                .then(res => setCities(res.data))
    }, [])

  return (
    <Carousel data={items} range={4} slides={3} interval={4} />
  )
}
