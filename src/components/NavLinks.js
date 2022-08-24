import { Link as LinkRouter } from "react-router-dom"

export default function NavLinks() {
    const pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
        {name: 'NewCity', to: '/newcity'},
    ]

    const link = (page) => <LinkRouter to={page.to} className='Header-link' key={page.name}>{page.name}</LinkRouter>

  return (
    <>
    {pages.map(link)}
    </>
  )
}
