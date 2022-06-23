import React from "react";
import Spinner from "../assets/images/Spinner100px.gif";
export const Loading = () => {
  return (
    <div className="spinner">
      <div className="spinner-image">
        <img src={Spinner} alt="Spinner" />
      </div>
      <div className="spinner-text">Loading...</div>
    </div>
  );
};
