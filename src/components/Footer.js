import '../styles/Footer.css';
import Logo from './img/Logo-nav.png';

export default function Footer() {
  return (
    <footer className='Footer-container'>
        <img className='Footer-logo' src={Logo} alt='logo'></img>
        <h3 className='Footer-title'>2022</h3>
        <div className='Footer-links'>
            <a className='Footer-links-item' href='#'>Home</a>
            <a className='Footer-links-item' href='#'>Cities</a>
        </div>
    </footer>    
  )
}
