import '../styles/CitiesCarousel.css'
import Carousel from './Carousel'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CitiesCarousel() {
    const [items, setCities] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/cities')
                .then(res => setCities(res.data))
    }, [])

  return (
    <Carousel data={items} range={4} slides={3} interval={4} />
  )
}
