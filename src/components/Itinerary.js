import React, { useState, useRef } from "react";
import "../styles/Itinerary.css";
import Activities from "./Activities";
import Comments from "./Comments";
import Alert from "../components/Alert/Alert";
import { useCreateActivityMutation } from "../features/activitiesAPI";
import {useDelItineraryMutation} from "../features/itineraryAPI";

export default function Itinerary({ item }) {
  let user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let [open, setOpen] = useState(false);
  let [edit, setedit] = useState(false);
  let [idItinerary, setIdItinerary] = useState();
  let nameRef = useRef();
  let photoRef = useRef();

  let [addActivityRedux, { data: activityAdded }] = useCreateActivityMutation();
  let msg = "";

  let form = [
    {
      Name: "Name",
      Label: "Name",
      Placeholder: "Activity",
      type: "text",
      value: nameRef,
    },
    {
      Name: "photo",
      Label: "photo",
      Placeholder: "Photo",
      type: "text",
      value: photoRef,
    },
  ];

  function delItinerary() {
    console.log("Del itinerary");
  }
  function editItinerary() {
    console.log("Edit Itinerary");
  }

  function addActivity() {
    console.log("hola");
    setOpen(true);
  }
  function createActivity(e) {
    e.preventDefault();
    let dataActivity = {
      name: nameRef.current.value,
      photo: photoRef.current.value,
      itinerary: nameRef.current.id,
    };
    console.log(dataActivity);
    addActivityRedux(dataActivity);
  }
  function cancelCreate() {
    setOpen(false);
  }

  return (
    <div className="Itinerary-container">
      <div className="card">
        <div className="card-img">
          <img
            className="Itinerary-photo"
            src={item.user.photo}
            alt={item.user.name}
          ></img>
        </div>
        <div className="card-info">
          <p className="text-title">{item.name}</p>
          <p className="text-user">
            By {item.user.name}
            {""} {item.user.lastName}
          </p>
          <div className="info-pd">
            <p className="text-body">Price: {"💵 ".repeat(item.price)}</p>
            <p className="text-body">Duration: {item.duration}hs</p>
          </div>
          <p className="text-tags">{item.tags.map((tag) => "#" + tag + " ")}</p>
        </div>
      </div>
      {user.id == item.user._id ? (
        <>
          <button onClick={addActivity}> Add Activity </button>
          <button onClick={editItinerary}> Edit </button>
          <button onClick={delItinerary}> Delete </button>
        </>
      ) : (
        ""
      )}
      {open ? (
        <form onSubmit={createActivity}>
          {form.map((e) => (
            <div className="EditProfile-form" key={e.Name}>
              <label className="EditProfile-labels" htmlFor={item._id}>
                {e.Name}
              </label>
              <input
                className="EditProfile-inputs"
                id={item._id}
                placeholder={e.Placeholder}
                ref={e.value}
              ></input>
            </div>
          ))}
          <div className="EditProfile-buttons">
            <Alert label={"Send"} message="" />
            <button className="Profile-buttonEdit" onClick={cancelCreate}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
      {edit ? (
        <form onSubmit={editItinerary}>
          {form.map((e) => (
            <div className="EditProfile-form" key={e.Name}>
              <label className="EditProfile-labels" htmlFor={e.Name}>
                {e.Name}
              </label>
              <input
                className="EditProfile-inputs"
                id={e.Name}
                placeholder={e.Placeholder}
                ref={e.value}
              ></input>
            </div>
          ))}
          <div className="EditProfile-buttons">
            <Alert label={"Send"} message="" />
            <button className="Profile-buttonEdit" onClick={cancelCreate}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      ) : (
        ""
      )}

      <Activities itineraryId={item._id} />
      <Comments itineraryId={item._id} />
      <hr className="horizontal-line"></hr>
    </div>
  );
}
