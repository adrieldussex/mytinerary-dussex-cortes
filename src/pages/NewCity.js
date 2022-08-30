import '../styles/NewCity.css'
import Input from '../components/Input'

export default function NewCity() {
  const form = [
    {label: 'Country', for: 'country', type: 'text'},
    {label: 'City', for: 'city', type: 'text'},
    {label: 'Population', for: 'population', type: 'number'},
    {label: 'Photo', for: 'photo', type: 'text'},
    {label: 'Fundation', for: 'fundation', type: 'date'}
  ]

  return (
        <div className='NewCity-container'>
            <h1>New City</h1>
            <div className='NewCity-form'> 
              {form.map(input => <Input label={input.label} for={input.for} type={input.type}/>)}
            </div>
        </div>
  )
}
