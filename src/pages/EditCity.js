import '../styles/EditCity.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Option from '../components/Option'
import Input from '../components/Input'
import api_url from '../api'

export default function EditCity() {
  const form = [
    { label: 'City', htmlFor: 'city', type: 'text', placeholder: 'Enter a city' },
    { label: 'Country', htmlFor: 'country', type: 'text', placeholder: 'Enter a country' },
    { label: 'Population', htmlFor: 'population', type: 'number', placeholder: 'Enter a population' },
    { label: 'Photo', htmlFor: 'photo', type: 'text', placeholder: 'Enter a photo' },
    { label: 'Founded', htmlFor: 'founded', type: 'date', placeholder: 'Enter a founded' }
  ]
  const [cities, setCities] = useState([])
  useEffect(() => {
    axios.get(api_url + '/cities')
      .then(res => setCities(res.data))
  }, [])

  return (
    <div className='EditCity-container'>
      <h1>Edit City</h1>
      <div className='Select-container'>
        <form className='NewCity-form'>
          <select className='EditCity-select'>
            {cities.map(city => <Option city={city} key={city.city} />)}
          </select>
          {form.map(input => <Input label={input.label} htmlFor={input.htmlFor} type={input.type} key={input.label} />)}
          <button className='Submit-button' type='submit'>Edit City</button>
        </form>
      </div>
    </div>
  )
}
