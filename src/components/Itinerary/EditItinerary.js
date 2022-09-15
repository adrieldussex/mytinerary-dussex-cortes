import React from "react";

export default function EditItinerary() {
  const buttons = [
    { label: "Edit" }, 
    { label: "Delete" }
];

  console.log(buttons);
  function printButtons(e) {

      <button> {e.label} </button>

  }
  return (
    <div>
      {/* {buttons?.map(printButtons)} */}
      <button> Edit </button>
    <button> Delete </button>
    </div>
  );
}
