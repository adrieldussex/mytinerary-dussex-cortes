import '../styles/CitiesCarousel.css'
import Carousel from './Carousel'
import { useGetAllCitiesQuery } from '../features/citiesAPI'

export default function CitiesCarousel() {
    const {
      data : items,
      error,
      isLoading,
      isSucess,
      isFailed
    }
    = useGetAllCitiesQuery()


  return (
    <Carousel data={items} range={4} slides={3} interval={4} />
  )
}
