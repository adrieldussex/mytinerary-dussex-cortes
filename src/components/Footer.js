import '../styles/Footer.css';
import {Link as LinkRouter } from 'react-router-dom'

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='Footer-container'>
        <img className='Footer-logo' src='http://localhost:3000/img/Logo-nav.png' alt='logo'></img>
        <h3 className='Footer-title'>2022</h3>
        <div className='Footer-links'>
            <LinkRouter className='Footer-links-item' to='/'>Home</LinkRouter>
            <LinkRouter className='Footer-links-item' to='/cities'>Cities</LinkRouter>
            <button className='Chevron'>
              <img src='http://localhost:3000/img/chevron-up.svg' alt='chevron' onClick={scrollUp}></img>
            </button>
        </div>
    </footer>    
  )
}
