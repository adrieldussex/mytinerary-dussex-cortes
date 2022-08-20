import '../styles/Carousel.css'

export default function Carousel(props) {
    const range = props.range
    const start = 0
    const end = start + range
    const items = props.data

    const itemView = (item) => (
        <div className='item'>
            <img src={item.url} />
            <p>{item.title}</p>
        </div>
    )
    
  return (
    <div>
        <div className='Carousel-slide'>
            <h1>Popular MYtineraries</h1>
            { items.slice(start, end).map(itemView) }
        </div>
    </div>
  )
}
