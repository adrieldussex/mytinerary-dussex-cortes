import Carousel from './Carousel'

export default function EventCarousel() {
    const items = [
        {url: "", title: "A"},
        {url: "", title: "B"},
        {url: "", title: "C"},
        {url: "", title: "D"},
        {url: "", title: "E"},
        {url: "", title: "F"}
    ]

  return (
    <Carousel data={items} />
  )
}
