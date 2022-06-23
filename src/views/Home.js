import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { PersonDetail } from "./PersonDetail";
import { AllPeople } from "./AllPeople";
import { useViewport } from "../hooks/useViewport";

export const Home = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const { width } = useViewport();

  const breakpoint = 768;
  return (
    <>
      <div className="container">
        <div className="navbar">
          <NavBar
            breakpoint={breakpoint}
            selectedPerson={selectedPerson}
            isSelected={setSelectedPerson}
          />
        </div>
        <div className="all-people">
          {selectedPerson && width < breakpoint ? (
            <PersonDetail selectedPerson={selectedPerson} />
          ) : (
            <AllPeople setSelectedPerson={setSelectedPerson} />
          )}
        </div>
        <div className="person-detail">
          {selectedPerson && width > breakpoint ? (
            <PersonDetail selectedPerson={selectedPerson} />
          ) : null}
        </div>
      </div>
    </>
  );
};
