import React from "react";

export default function EditItinerary() {
  const buttons = [
    { label: "Edit" }, 
    { label: "Delete" }
];

  function printButtons(e) {
      <button> {e.label} </button>
  }
  return (
    <div className="EditProfile-buttons">
      {/* {buttons?.map(printButtons)} */}
      <button className="Profile-buttonEdit"> Edit </button>
    <button className="Profile-buttonEdit"> Delete </button>
    </div>
  );
}
