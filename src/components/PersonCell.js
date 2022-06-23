import React from "react";
export const PersonCell = ({ data }) => {
  return (
    <div className="person-cell">
      <div className="person-data">
        <div className="text-person-name">{data.name}</div>
        <div className="text-person-desc">{`${
          data.species ? data.species.name : "Human"
        } from ${data.homeworld.name}`}</div>
      </div>
      <div className="person-arrow">
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  );
};
