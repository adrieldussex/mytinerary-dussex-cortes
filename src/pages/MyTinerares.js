import React from "react";
import { useGetItineraryByCUMutation } from "../features/itineraryAPI";
import { useEffect, useState } from "react";
import Itinerary from "../components/ItineraryPage";
import "../styles/NewCity.css";
import { Link as LinkRouter } from "react-router-dom";
import NewItinerary from "../components/Itinerary/NewItinerary";

export default function MyTinerares() {
  const [id, setId] = useState("63181031f35384d38640571f");

  const [getAllItinerary, { data: items }] = useGetItineraryByCUMutation();

  const buttons = [{ label: "editItinerary" }, { label: "delateItinerary" }];

  useEffect(() => {
    getAllItinerary({ city: "", user: id });
  }, []);

  return (

    <>
    <LinkRouter to='/NewItinerary' className="Submit-button"> Add Itinerary </LinkRouter>
  {items?.map(Itinerary)}
   
  </>
    
    )
}
