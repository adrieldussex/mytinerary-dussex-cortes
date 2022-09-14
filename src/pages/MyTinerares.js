import React from "react";
import { useGetItineraryByCUMutation } from "../features/itineraryAPI";
import { useEffect, useState } from "react";
import Itinerary from "../components/Itinerary";

export default function MyTinerares() {
  const [id, setId] = useState("63181031f35384d38640571f");
  
  const [getAllItinerary, { data: items}] = useGetItineraryByCUMutation();

























  
   
  useEffect(() => {
    getAllItinerary({ city: "", user: id });
  }, []  );
  
  console.log(items)


  return (
    <>
      {/* <Itinerary data={items}/> */}
    {items?.map(Itinerary)}
    </>
  )
}
