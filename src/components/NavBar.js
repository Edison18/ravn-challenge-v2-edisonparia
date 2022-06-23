import React from "react";
import { useViewport } from "../hooks/useViewport";
export const NavBar = ({ breakpoint, selectedPerson, isSelected }) => {
  const { width } = useViewport();

  const isSelectedName = () => {
    isSelected(null);
  };
  return width < breakpoint ? (
    <>
      {selectedPerson ? (
        <div className="navbar-button" onClick={isSelectedName}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
      ) : null}

      <div className="navbar-title">
        {selectedPerson ? selectedPerson.name : "People of Star Wars"}
      </div>
    </>
  ) : (
    <div className="navbar-title">Ravn Star Wars Registry</div>
  );
};
