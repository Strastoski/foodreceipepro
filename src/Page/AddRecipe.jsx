import React from "react";
import Nav from "../components/NavNonLog";

const AddRecipe = () => {
  return (
    <div className="page">
      {/* Nav */}
      <Nav></Nav>
      {/* End Nav */}

      <input type="text" placeholder="Add Photo" className="addphoto" />

      <input type="text" placeholder="Add Photo" className="titleadd" />
    </div>
  );
};

export default AddRecipe;
