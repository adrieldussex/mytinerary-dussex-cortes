import { Link as LinkRouter } from "react-router-dom"

export default function NavLinks() {
  let pages = []  
  let role = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).role : ""

  if(role == "admin"){

    pages = [
      {name: 'Home', to: '/'},
      {name: 'Cities', to: '/cities'},
      {name: 'NewCity', to: '/newcity'},
      {name: 'EditCity', to: '/editcity'}
    ]
  }else{
    pages = [
      {name: 'Home', to: '/'},
      {name: 'Cities', to: '/cities'}]
  }


    const link = (page) => <LinkRouter to={page.to} className='Header-link' key={page.name}>{page.name}</LinkRouter>

  return (
    <>
    {pages.map(link)}
    </>
  )
}
