import '../styles/EditCity.css'
import axios from 'axios'
import { useEffect , useState } from 'react'
import Option from '../components/Option'

export default function EditCity() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/cities')
                .then(res => setCities(res.data))
    }, [])

  return (
    <div className='EditCity-container'>
        <h1>Edit City</h1>
        <div className='Select-container'>
            <select className='EditCity-select'>
                {cities.map(city => <Option city={city}/>)}
            </select>
        </div>
    </div>
  )
}
