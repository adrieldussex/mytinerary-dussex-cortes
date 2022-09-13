import React from "react";
import "../styles/EditCity.css"
import Input from "../components/Input";
import { useState, useEffect, useRef } from "react";
import {useGetAllCitiesQuery,useEditCityMutation,useGetCityQuery} from "../features/citiesAPI";

export default function EditCity() {

  const { data: cities } = useGetAllCitiesQuery();

  const [editCity] = useEditCityMutation();

  const [id, setId] = useState();

// const {data: city} = useGetCityQuery(id) /// Esto lo usaré para rellenar los inputs =) 

  const cityRef = useRef();
  const photoRef = useRef();
  const countryRef = useRef();
  const populationRef = useRef();
  const foundedRef = useRef();

  const form = [
    {
      label: "City",
      htmlFor: "city",
      type: "text",
      placeholder: "Enter a city",
      value: cityRef,
    },
    {
      label: "Country",
      htmlFor: "country",
      type: "text",
      placeholder: "Enter a country",
      value: countryRef,
    },
    {
      label: "Population",
      htmlFor: "population",
      type: "number",
      placeholder: "Enter a population",
      value: populationRef,
    },
    {
      label: "Photo",
      htmlFor: "photo",
      type: "text",
      placeholder: "Enter a photo",
      value: photoRef,
    },
    {
      label: "Founded",
      htmlFor: "founded",
      type: "date",
      placeholder: "Enter a founded",
      value: foundedRef,
    },
  ];


  function updateCity(e) {
    e.preventDefault();
    console.log(id)
    
    const dataCity = {
      city: cityRef.current.value,
      photo: photoRef.current.value,
      country: countryRef.current.value,
      population: populationRef.current.value,
      founded: foundedRef.current.value,
      
    };
    console.log(dataCity)
    editCity({dataCity,id});

    ///Get better option for a new city///
    alert("Edited successfully");

    ///Add a reset here =) ♥
  }

  function getID(e){
    console.log(e.target.value)
    setId(e.target.value)
    console.log(id)

  }

  return (
    <div className="EditCity-container">
      <h1>Edit City</h1>
      <div className="Select-container">
        <form className="NewCity-form" onSubmit={updateCity}>
          <select className="EditCity-select" onChange={getID}>
            <option hidden>Select city for Edit</option>
            {cities?.map((city) => (
              <option className="Option-select" key={city._id} value={city._id}  >{city.city} </option>
            ))}
          </select>
          {form.map((input) => (
            <Input
              label={input.label}
              htmlFor={input.htmlFor}
              type={input.type}
              key={input.label}
              value = {input.value}
            />
          ))}
          <button className="Submit-button" type="submit">
            Edit City
          </button>
        </form>
      </div>
    </div>
  );
}
