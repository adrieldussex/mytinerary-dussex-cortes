import '../styles/Footer.css';
import Logo from '../img/Logo-nav.png';
import {Link as LinkRouter} from 'react-router-dom'
import CallToAction from './CallToAction';

export default function Footer() {
  return (
    <footer className='Footer-container'>
        <img className='Footer-logo' src={Logo} alt='logo'></img>
        <h3 className='Footer-title'>2022</h3>
        <div className='Footer-links'>
            <LinkRouter className='Footer-links-item' to='/'>Home</LinkRouter>
            <LinkRouter className='Footer-links-item' to='/cities'>Cities</LinkRouter>
        </div>
    </footer>    
  )
}
