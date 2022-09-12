import React from "react";
import "../styles/NewCity.css";
import Input from "../components/Input";
import { useCreateCityMutation } from "../features/citiesAPI";
import { useRef } from "react";



export default function NewCity() {

  const [createCity] = useCreateCityMutation()


  const cityPhotoRef = useRef()
  const cityNameRef = useRef()
  const countryNameRef = useRef()
  const populationRef = useRef()
  const foundationRef = useRef()

  const form = [
    {
      label: "City",
      htmlFor: "city",
      type: "text",
      placeholder: "Enter a city",
      value: cityNameRef,
    },
    {
      label: "Country",
      htmlFor: "country",
      type: "text",
      placeholder: "Enter a country",
      value: countryNameRef,
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
      value: cityPhotoRef,
    },
    {
      label: "Founded",
      htmlFor: "founded",
      type: "date",
      placeholder: "Enter a founded",
      value: foundationRef,
    },
  ];


  function newCity(e)  {
    e.preventDefault();

    const dataCity = {
      city: cityNameRef.current.value,
      photo: cityPhotoRef.current.value,
      country: countryNameRef.current.value,
      population: populationRef.current.value,
      founded: foundationRef.current.value
  }
  console.log(dataCity)
  createCity(dataCity)

  ///Get better option for a new city///
alert("Created successfully")

///Add a reset here =) ♥
}

  return (
    <div className="NewCity-container">
      <h1>New City</h1>
      <form className="NewCity-form" onSubmit={newCity}>
        {form.map((input) => (
          <Input
            label={input.label}
            htmlFor={input.htmlFor}
            type={input.type}
            key={input.label}
            value={input.value}
          />
        ))}
        <button className="Submit-button" type="submit">
          Add City
        </button>
      </form>
    </div>
  );

        }