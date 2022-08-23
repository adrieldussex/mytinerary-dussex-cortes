import '../styles/Header.css';
import {Link as LinkRouter} from 'react-router-dom'
import Logo from '../img/Logo-nav.png';


export default function Header() {
    const pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
        {name: 'NewCity', to: '/newcity'},
    ]

    const link = (page) => <LinkRouter to={page.to} className='Header-link'>{page.name}</LinkRouter>

  return (
    <div className='Header-container'>
        <LinkRouter to='/'><img src={Logo} alt="logo-header"></img></LinkRouter>
        <nav>
            {pages.map(link)}
        </nav>
    </div>
  )
}
