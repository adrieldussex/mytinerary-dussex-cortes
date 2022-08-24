import '../styles/Footer.css';
import {Link as LinkRouter } from 'react-router-dom'

export default function Footer() {
  const pages = [
    {name: 'Home', to: '/'},
    {name: 'Cities', to: '/cities'},
    {name: 'NewCity', to: '/newcity'},
  ]

  const link = (page) => <LinkRouter to={page.to} className='Footer-links-item' key={page.name}>{page.name}</LinkRouter>

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='Footer-container'>
      <LinkRouter to='/'>
        <img className='Footer-logo' src='http://localhost:3000/img/Logo-nav.png' alt='logo'></img>
      </LinkRouter>
        <h3 className='Footer-title'>2022</h3>
        <div className='Footer-links'>
            <nav>{pages.map(link)}</nav>
            <button className='Chevron' onClick={scrollUp}>
              <img src='http://localhost:3000/img/chevron-up.svg' alt='chevron'></img>
            </button>
        </div>
    </footer>    
  )
}
