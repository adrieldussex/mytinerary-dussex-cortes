import React from "react";
import Input from "../Input";
import { useRef } from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function AddItinerary() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();
  

  const form = [
    {
      label: "Name",
      htmlFor: "Name",
      type: "text",
      placeholder: "Enter a itinerary",
      value: nameRef,
    },
    {
      label: "Price",
      htmlFor: "Price",
      type: "number",
      placeholder: "Enter a Price",
      value: priceRef,
    },
    {
      label: "Duration",
      htmlFor: "Duration",
      type: "number",
      placeholder: "Enter a duration",
      value: durationRef,
    }
  
  ];

  return (
    <>
      <div className="NewCity-container">
        <h1>New Itinerary</h1>
        <form className="NewCity-form" >
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
            Add Itinerary
          </button>
        </form>
        <button className="Submit-button" onClick={() => navigate(-1)}>Go back</button>

      </div>
    </>
  );
}
