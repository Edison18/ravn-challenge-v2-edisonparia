// import { NavBar } from "./components/NavBar";
// import { PersonDetail } from "./views/PersonDetail";
// import { AllPeople } from "./views/AllPeople";
// import { useState } from "react";
// import { useViewport } from "./hooks/useViewport";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { PageNotFound } from "./views/PageNotFound";

function App() {
  // const [selectedPerson, setSelectedPerson] = useState(null);
  // const [selectedName, setSelectedName] = useState(null);
  // const { width } = useViewport();

  // const breakpoint = 768;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Router>
        <Route path="/" element={<Home />} />
        <Route element={<PageNotFound />} />
      </Router> */}
      {/* <div className="container">
        <div className="navbar">
          <NavBar breakpoint={breakpoint} selectedName={selectedName} />
        </div>
        <div className="all-people">
          {selectedPerson && width < breakpoint ? (
            <PersonDetail selectedPerson={selectedPerson} />
          ) : (
            <AllPeople
              setSelectedPerson={setSelectedPerson}
              setSelectedName={setSelectedName}
            />
          )}
        </div>
        <div className="person-detail">
          {selectedPerson && width > breakpoint ? (
            <PersonDetail selectedPerson={selectedPerson} />
          ) : null}
        </div>
      </div> */}
    </>
  );
}

export default App;
