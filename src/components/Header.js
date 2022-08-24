import '../styles/Header.css';
import MobileNav from './MobileNav';
import Nav from './Nav';
import {Link as LinkRouter} from 'react-router-dom'

export default function Header() {
    return (
        <div className='Header-container'>
            <LinkRouter to='/'>
                <img className='Header-logo' src='http://localhost:3000/img/Logo-nav.png' alt="logo-header"></img>
            </LinkRouter>
            <div className='Header-right'>                
                <MobileNav />
                <Nav />
            </div>
                <img className='Header-avatar' src="https://i.imgur.com/CNe5NKD.png" alt="user-avatar"></img>
        </div>
    )
}
