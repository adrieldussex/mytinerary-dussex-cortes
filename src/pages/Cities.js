import CityCard from '../components/CityCard'
import '../styles/Cities.css'


export default function Cities() {
  return (
      <div className='Cities-container'>
          <h1>Cities</h1>
          <div className='Cities-card-container'>
            < CityCard />
          </div>
      </div>
  )
}
