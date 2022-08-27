import '../styles/Carousel.css'
import '../styles/CarouselArrow.css'
import Arrow from './Arrow'
import {useEffect, useState} from 'react'

export default function Carousel(props) {
    const range = props.range
    const limitSlides = (props.slides * range)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const items = props.data
    const interval = props.interval * 1000

    const itemView = (item) => (
        <div className='item' key={item.title}>
            <img src={item.url} alt={item.title}/>
            <p>{item.title}</p>
        </div>
    )

    useEffect( () => {
        let id = setInterval(function () {
            forward()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(id)
    }, [start])

    function backward() {
        if (start >= range) {
            setStart( start - range )
            setEnd( end - range )
        } else {
            setStart(limitSlides-range)
            setEnd(limitSlides)
        }
        clearInterval(intervalId)
    }

    function forward() {
        if (start < limitSlides-range) {
            setStart( start + range )
            setEnd( end + range )
        } else {
            setStart(0)
            setEnd(range)
        }
        clearInterval(intervalId)
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
