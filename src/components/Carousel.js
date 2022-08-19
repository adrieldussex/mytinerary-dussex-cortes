export default function Carousel(props) {
    const range = 4
    const items = props.items

    const itemView = (item) => (
        <div className='item'>
            <img src={item.url}></img>
            <p>{item.title}</p>
        </div>
    )
    
  return (
    <div>
        <div className='slide'>
            { items.slice(0, range).map(itemView) }
        </div>
    </div>
  )
}
