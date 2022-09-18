import React from "react";
import "../styles/Itinerary.css";
import Activities from "./Activities";
import Comments from "./Comments";

export default function Itinerary(item) {
  return (
    <div className="Itinerary-container" key={item._id}>
      <div className="Itinerary-card">
        <div className="Itinerary-photo"> <img className='Itinerary-photo' src={item.user.photo} alt={data}></img> </div>
        <div className="Itinerary-description">
          <div className="Itinerary-name">
            <h3>{item.name}</h3>
            <p>{item.user.name}</p>
          </div>
          <div className="Itinerary-info">
            <p>Was a nice place</p>
            <div className="Info-price-duration">
              <p>Price: {item.price}</p>
              <p>Duration: {item.duration}</p>
            </div>
            <div className="Info-tags">
              <p> {item.name} </p>
            </div>
          </div>
        </div>
        <div>
          {/* <img className='Like' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW9JREFUSEvVlUFWwjAQhr+h7OUIeALxBOIN5Alr5QR6FD0BurY+uIF4g3oCOALugfElaWoorQ0L9Jld8qf/P/NnZiocecmR+fkjgVSvgBugl2e4BB4ZyszuHX4HdHM8A54LPLBlN4OpdtgwETAEe0thbg4F+jX4jIQxA1l5fFcg1UzgTJVPWtzTcoRs6bPlQYQTsy3wDSZySOh5XJWMkZzvC7zqrSgT+3GbbhiFveyyc4IJ/Up8zdIEocKYa3nKs821XnQuwkUIHlxh30G+MxJrY2GRpKo2/YRTBmIe9fA11a5sWFieoVju3xPg2Bbh/YMVzqai1KK8ckWwEOhUP7JrIF+mGW0uo0UM+Zo3EXoKHwzFN2hpVOSlmPdCnEiZvFTC+7PoEJEG8t0+CI2OEYkgrxcIOrfSrkjynwXqRMx5+KBVYyNwo/l/ULbLdKevlgby5gx8JIGIHQOmFCPI4wVipmlNNzZbFNXG9Zf+v8AXmgjeGbN7Px8AAAAASUVORK5CYII=" alt='logoLike'/> */}
          <div className="Like">{item.likes.length}</div>
        </div>
      </div>
      <Activities />
      <Comments />
    </div>
  );
}
