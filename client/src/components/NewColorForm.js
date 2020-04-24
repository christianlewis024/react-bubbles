import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const NewColorForm = ({ updateColors }) => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axiosWithAuth().post.then((res) => {
  //       updateColors;
  //     });
  //   };

  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <p>Add New Color</p>
      <label>Name:</label>
      <input id="color" type="text" placeholder="name of color" name="color" />

      {/* still need to add onChange event here  and below */}
      <label>Color Hex</label>
      <input id="hex" type="text" placeholder="Hex Code for color" name="hex" />
      <div className="bottom">
        <button type="submit" value="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewColorForm;
