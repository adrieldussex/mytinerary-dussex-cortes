import React , {useEffect, useState} from 'react'
import '../styles/Profile.css'
import  {useGetOneUserMutation} from '../features/usersAPI'
export default function Profile() {

    let [edit , setEdit] = useState(false)
    
    
    let id = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : ""
    let [getOneUser,  {data : myUser}] = useGetOneUserMutation()
    let theUser = myUser?.response
    let [user , setUser] = useState()
    
    
    useEffect(() => {
        getOneUser(id)
    }, [id])
    
    useEffect(() => {
        setUser(theUser)   
        console.log(user)
        
    }, [myUser])
    
    
    
    
    



  return (edit ? (

    
    <div className="card">
<div className="card-img"></div>
  <div className="card-info">
  <div className='item-card-info'>
    <p className="text-title">country</p>
    <p className="text-body">{user?.country}</p>
    </div>
    <div>
    <button> Accept </button>
    <button> Back </button>
    </div>
  </div>
</div>
    ):
    <div className="card">
<div className="card-img"><img className='Itinerary-photo' src={user?.photo} alt={user?.name}></img></div>
  <div className="card-info">
    <div className='item-card-info'>
    <p className="text-title">Name: </p>
    <p className="text-body">{user?.name}</p>
    </div>
    <div className='item-card-info'>
    <p className="text-title">Last name: </p>
    <p className="text-body">{user?.lastName}</p>
    </div>
    <div className='item-card-info'>
    <p className="text-title">country</p>
    <p className="text-body">{user?.country}</p>
    </div>
    <div className='item-card-info'>
    <p className="text-title">mail </p>
    <p className="text-body">{user?.mail}</p>
    </div>
    <div>
    <button> Edit </button>
    <button> Back </button>
    </div>
  </div>
</div>
  )
}
