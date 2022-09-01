import '../styles/Footer.css';
import {Link as LinkRouter } from 'react-router-dom'

export default function Footer() {
  const pages = [
    {name: 'Home', to: '/'},
    {name: 'Cities', to: '/cities'},
    {name: 'NewCity', to: '/newcity'},
    {name: 'EditCity', to: '/editcity'},
  ]

  const year = new Date();

  const link = (page) => <LinkRouter to={page.to} className='Footer-links-item' key={page.name}>{page.name}</LinkRouter>

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='Footer-container'>
      <div className='Footer-top'>        
        <LinkRouter to='/'>
          <img className='Footer-logo' src='http://localhost:3000/img/Logo-nav.png' alt='logo'></img>
        </LinkRouter>
          <div className='Footer-links'>
              <nav>{pages.map(link)}</nav>
              <button className='Chevron' onClick={scrollUp}>
                <img src='http://localhost:3000/img/chevron-up.svg' alt='chevron'></img>
              </button>
          </div>
      </div>
      <div className='Footer-copy'>
        <p>© {year.getFullYear()} All rights reserved | Designed by Adriel Dussex and Lucas Cortes</p>
      </div>
    </footer>    
  )
}
