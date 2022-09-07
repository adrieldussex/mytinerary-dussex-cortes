import '../styles/Comments.css'
import { useState } from 'react'

export default function Comments() {


let comments = [
    {
        message: "Que copadas todas las actividades que hay para hacer, unas ganas de ir. Lastima que no tengo un mango",
        user: {
            name: "Lionel",
            surName: "Messi",
            photo: "https://br.web.img3.acsta.net/c_310_420/pictures/19/08/14/22/33/0632419.jpg",
            mail: "liomessi10@gmail.com"
        }
    },
    {
        message: "Chau",
        user: {
            name: "Rodrigo",
            surName: "De Paul",
            photo: "https://es.coachesvoice.com/wp-content/uploads/2021/07/GettyImages-1323570345-1.jpg",
            mail: "tinitinitini@gmail.com"
        }
    }
]


const [open, setOpen] = useState(false)
const handleOpen = () => {
    open ?
    setOpen(false)
    :setOpen(true)
}
const view = (comment) => {
    return (
        <div className='Comment-card'>
            <div className='Comment-userPhoto'>                
                <div className='Comment-photo' style={{backgroundImage:`url(${comment.user.photo})`, backgroundSize:"cover"}}></div>
            </div>
            <div className='Comment-description'>                
                <div className='Comment-user'>
                    <h3>{comment.user.name} {''} {comment.user.surName}</h3>
                    <p>{comment.user.mail}</p>
                </div>
                <div className='Comment-info'>
                    <p>{comment.message}</p>
                </div>
            </div>
        </div>
    )
}

return (
<div className='Comments-container'>
    <button type="button" className='comments-button' onClick={handleOpen}>
        {open? "Close ":""}
        Comments
    </button>
        {open ?
        <div className='Comments-cards'>
            {comments.map(view)}
        </div>
        :null
        }
</div>
)
}
