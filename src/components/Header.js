import '../styles/Header.css';
import { useState } from 'react';
import {Link as LinkRouter} from 'react-router-dom'

export default function Header() {
    const pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
        {name: 'NewCity', to: '/newcity'},
    ]

    const link = (page) => <LinkRouter to={page.to} className='Header-link' key={page.name}>{page.name}</LinkRouter>

    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        if(open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className='Header-container'>
            <LinkRouter to='/'>
                <img className='Header-logo' src='http://localhost:3000/img/Logo-nav.png' alt="logo-header"></img>
            </LinkRouter>
            <div className='Header-right'>                
                <img className='Header-avatar' src="https://i.imgur.com/CNe5NKD.png" alt="user-avatar"></img>
                <div className='Header-menu'>
                    <button onClick={handleOpenMenu}>Menu</button>
                        {
                            open
                                ? <nav>{pages.map(link)}</nav>
                                : null
                        }
                </div>
            </div>
        </div>
    )
}
