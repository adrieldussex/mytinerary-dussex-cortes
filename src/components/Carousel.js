import '../styles/Carousel.css'
import '../styles/CarouselArrow.css'
import Arrow from './Arrow'
import {useEffect, useState} from 'react'

export default function Carousel(props) {
    const range = props.range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const items = props.data

    const itemView = (item) => (
        <div className='item' key={item.title}>
            <img src={item.url} alt={item.title}/>
            <p>{item.title}</p>
        </div>
    )

    useEffect( () => {
        let id = setInterval(function () {
            forward()
        }, 8000)

        setIntervalId(id)

        return () => clearInterval(intervalId)
    }, [start])

    function backward() {
        if (start >= range) {
            setStart( start - range )
            setEnd( end - range )
        }
    }

    function forward() {
        if (end < items.length) {
            setStart( start + range )
            setEnd( end + range )
        }
    }
    
  return (
    <div className='Carousel'>
        <h1>Popular MyTineraries</h1>
        <div className='Carousel-container'>
            <Arrow icon={"<"} click={backward}/>            
            <div className='Carousel-slide'>
                { items.slice(start, end).map(itemView) }
            </div>
            <Arrow icon={">"} click={forward}/>
        </div>
    </div>
  )
}
