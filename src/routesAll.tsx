import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CareerPage from "./components/CareerPage";
import MainHome from "./components/MainHome";
import ProjectPage from "./components/ProjectPage";

const AllRoutesApp = () => (
  <Router>
    <Routes>
      {["/Home", "/"].map((path) => {
        return (
          <Route
            key={uuidv4()}
            path={path}
            element={
              <div>
                <MainHome />
              </div>
            }
          />
        );
      })}
      ;
      <Route
        path="/Project"
        element={
          <div>
            <ProjectPage />
          </div>
        }
      />
      <Route
        path="/Career"
        element={
          <div>
            <CareerPage />
          </div>
        }
      />
    </Routes>
  </Router>
);

export default React.memo(AllRoutesApp);
