import CityDetails from "../components/CityDetails"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import api_url from "../api"

function City() {
    const {id} = useParams()
    const [name, setName] = useState([]);

    useEffect(()=>{
        axios.get(api_url + `/cities/${id}`)
        .then(res => {setName(res.data.response)})
        .catch(err=>{
            console.log(err)
        })
    },[])


    return (  
        <div className="CitiesPage-main">
            <CityDetails data={name} cityId={id} />
        </div>
    )
}


export default City