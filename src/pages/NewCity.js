import '../styles/NewCity.css'
import Input from '../components/Input'

export default function NewCity() {
  const form = [
    { label: 'City', htmlFor: 'city', type: 'text', placeholder: 'Enter a city' },
    { label: 'Country', htmlFor: 'country', type: 'text', placeholder: 'Enter a country' },
    { label: 'Population', htmlFor: 'population', type: 'number', placeholder: 'Enter a population' },
    { label: 'Photo', htmlFor: 'photo', type: 'text', placeholder: 'Enter a photo' },
    { label: 'Founded', htmlFor: 'founded', type: 'date', placeholder: 'Enter a founded' }
  ]
  const submit = (e) => {
    e.preventDefault()

  }
  return (
    <div className='NewCity-container'>
      <h1>New City</h1>
      <form className='NewCity-form'>
        {form.map(input => <Input label={input.label} htmlFor={input.htmlFor} type={input.type} key={input.label} />)}
        <button className='Submit-button' type='submit'>Add City</button>
      </form>
    </div>
  )
}
