import CityCard from '../components/CityCard'
import '../styles/Cities.css'
import { useGetAllCitiesQuery } from '../features/citiesAPI'

export default function Cities() {
  const {
        data : cities,
        error,
        isLoading,
        isSucess,
        isFailed
      }
      = useGetAllCitiesQuery()

  return (
    <div className='Cities-container'>
      <h1>Cities</h1>
      <div className='Cities-card-container'>
        {cities?.map(CityCard)}
      </div>
    </div>
  )
}
